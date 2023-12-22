import React, { useState } from 'react';

const HexConverter = () => {
  const [inputString, setInputString] = useState('');
  const [hexResult, setHexResult] = useState('');

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const convertToHex = () => {
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(inputString);
    const hexString = Array.from(uint8Array)
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    setHexResult(hexString);
  };

  let hexOutput = '';
  if (hexResult !== '') {
    hexOutput = `0x${hexResult}`;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', margin: '8px 0' }}>请输入内容 </div>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        style={{ width: '100%', margin: '8px 0' }}
      />
      <button
        onClick={convertToHex}
        style={{
          width: '200px',
          height: '50px',
          margin: '8px 0',
          borderRadius: '10px',
        }}
      >
        字符串转换为十六进制
      </button>
      <div style={{ width: '100%', margin: '8px 0' }}>输出结果: </div>
      <div style={{ width: '100%', margin: '8px 0' }}>{hexResult}</div>
      <hr style={{ width: '100%', margin: '8px 0' }} />
      <div style={{ width: '100%', margin: '8px 0' }}>请将下面的内容填到data中（data以0x开头）</div>
      <div style={{ width: '100%', margin: '8px 0' }}>{hexOutput}</div>
    </div>
  );
};

export default HexConverter;