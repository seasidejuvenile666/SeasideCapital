import fetch from 'node-fetch';
// const fetch = require('node-fetch')

const url = 'https://np-api.newparadigm.manta.network/getPointsV1';
const payload = {
  address: '0xC7AF21c54344ecD042c40286b05bd64BD8612dEE',
  polkadot_address: ''
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });