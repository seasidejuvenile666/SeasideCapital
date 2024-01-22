import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Table, Input, Button } from 'antd';
import checkWallet from '../../utils/fly-starter-api';

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
    title: '$FLYS',
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
      const queryResults = [];

      for (const address of addressesArray) {
        const result = await checkWallet(address);
        queryResults.push(result);
  
        // Delay between queries
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
  
      setResults(queryResults);
  
      const newData = queryResults.map((result, index) => ({
        key: index.toString(),
        address: result.address,
        number: result.quantity, // Use quantity from checkWallet result
      }));
  
      setData(newData);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPoints = () => {
    const totalPoints = results.reduce((total, result) => total + result.quantity, 0);
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
        <h1>$FLYS批量查询</h1>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          Fly Starter 官网: <a href='https://flystarter.io/' target="_blank">https://flystarter.io/</a>
        </div>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          服务器限制了查询速率，查询间隔为1s，如果一次性输入较多地址请耐心等待
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
          {totalPoints === 0 ? '很遗憾，' : '发财了哥！'}您的所有地址总计可领取的$FLYS为：{totalPoints}
        </div>
        <div style={{ fontSize: '18px', marginTop: '20px' }}>
          领取时间：1月26日
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
