import fetch from 'node-fetch';

async function checkWallets(addresses) {
  const url = 'https://np-api.newparadigm.manta.network/getPointsV1';

  const results = [];

  for (const address of addresses) {
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
        results.push({ address: address, data: data });
      } else {
        results.push({ address: address, error: 'Network response was not ok.' });
      }
    } catch (error) {
      results.push({ address: address, error: error.message });
    }
  }

  return results;
}

export default checkWallets;