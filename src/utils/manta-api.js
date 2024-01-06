import fetch from 'node-fetch';

async function checkWallets(addresses) {
  const url = 'https://np-api.newparadigm.manta.network/getPointsV1';
  const results = [];

  async function fetchData(address) {
    const payload = {
      address: address,
      polkadot_address: ''
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        return { address: address, data: data };
      } else {
        return { address: address, error: 'Network response was not ok.' };
      }
    } catch (error) {
      return { address: address, error: error.message };
    }
  }

  const promises = addresses.map(address => fetchData(address));
  const resultsArray = await Promise.all(promises);
  results.push(...resultsArray);

  return results;
}

export default checkWallets;