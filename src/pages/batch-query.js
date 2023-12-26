import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Table } from 'antd';
import checkWallets from './tool/api'; // 请替换成你实际的 api.js 文件路径

const columns = [
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <a>{text}</a>,
    width: '37.5vw', // 设置地址列宽度为表格的一半
  },
  {
    title: '$STRKR积分',
    dataIndex: 'number',
    key: 'number',
    width: '37.5vw', // 设置$STRKR积分列宽度为表格的一半
  },
];

export default function BatchQuery() {
  const [addresses, setAddresses] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]); // 新增一个状态用于存储表格数据
  const [loading, setLoading] = useState(false);
  const MAX_ADDRESSES = 100;


  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedAddresses = inputValue.split('\n').slice(0, MAX_ADDRESSES).join('\n');
    setAddresses(formattedAddresses);
  };

  const handleSubmit = async () => {
    setLoading(true); // 开始请求时设置 loading 为 true

    const addressesArray = addresses.split('\n').filter(address => address.trim() !== '');
    const queryResults = await checkWallets(addressesArray);
    setResults(queryResults);

    const newData = queryResults.map((result, index) => ({
      key: index.toString(),
      address: result.address,
      number: result.error ? `Error: ${result.error}` : result.data.result.points || 0,
    }));

    setData(newData); // 设置更新后的data

    setLoading(false); // 请求完成后设置 loading 为 false
  };

  const calculateTotalPoints = () => {
    let totalPoints = 0;
    for (const result of results) {
      if (!result.error && result.data.result.points) {
        totalPoints += result.data.result.points;
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
        }}>
        <h1>$STRKR积分批量查询</h1>
        <textarea
          placeholder="请输入地址，以换行进行分隔，一次最多100个"
          value={addresses}
          onChange={handleInputChange}
          style={{
            width: '75vw',
            height: '200px',
            resize: 'vertical', // 允许垂直拖动调整高度
            margin: '10px',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: '100px',
            height: '50px',
            borderRadius: '5px',
            margin: '10px',
          }}
        >
          提交
        </button>
        <div>{totalPoints === 0 ? '很遗憾，' : '发财了哥！'}您的所有地址总计可领取的$STRKR积分为：{totalPoints}，Claim时间：参见官网</div>
        <div style={{ width: '75vw', height: '200px', margin: '10px' }}>
          <Table columns={columns} dataSource={data} pagination={false} loading={loading}/>
        </div>
      </div>
    </Layout>
  );
}