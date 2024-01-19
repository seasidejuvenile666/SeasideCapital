import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Table, Input, Button } from 'antd';
import checkWallets from '../../utils/manta-api';

const { TextArea } = Input;

const columns = [
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <a>{text}</a>,
    width: '37.5vw',
  },
  {
    title: '$MANTA',
    dataIndex: 'number',
    key: 'number',
    width: '37.5vw',
  },
];

export default function BatchQuery() {
  const [addresses, setAddresses] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const MAX_ADDRESSES = 100;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedAddresses = inputValue.split('\n').slice(0, MAX_ADDRESSES).join('\n');
    setAddresses(formattedAddresses);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const addressesArray = addresses.split('\n').filter((address) => address.trim() !== '');
    if (!addressesArray.length) {
      setLoading(false);
      return;
    }

    try {
      const queryResults = await checkWallets(addressesArray);
      setResults(queryResults);

      const newData = queryResults.map((result, index) => ({
        key: index.toString(),
        address: result.address,
        number: result.data.data.total_score || 0, 
      }));

      setData(newData);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPoints = () => {
    let totalPoints = 0;
    for (const result of results) {
      if (!result.error && result.data.data.total_score) {
        totalPoints += result.data.data.total_score;
      }
    }
    return totalPoints;
  };

  const totalPoints = calculateTotalPoints();

  return (
    <Layout title="Batch Query" description="Batch Query Page">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <h1>$ALT批量查询</h1>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          Manta Network 官网: <a href='https://airdrop.manta.network/' target="_blank">https://airdrop.manta.network</a>
        </div>
        <TextArea
          placeholder="请输入EVM地址，以换行进行分隔，一次最多100个"
          value={addresses}
          onChange={handleInputChange}
          style={{
            width: '75vw',
            height: '100px',
            resize: 'vertical',
            margin: '10px',
            fontSize: '18px',
          }}
        />
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{
            width: '100px',
            height: '50px',
            borderRadius: '5px',
            margin: '10px',
            fontSize: '18px',
          }}
          loading={loading}
        >
          查询
        </Button>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          {totalPoints === 0 ? '很遗憾，' : '发财了哥！'}您的所有地址总计可领取的$ALT为：{totalPoints}
        </div>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          Claim时间：参见官网
        </div>
        <div style={{ width: '75vw', margin: '10px' }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            loading={loading}
          />
        </div>
      </div>
    </Layout>
  );
}