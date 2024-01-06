async function checkWallets(addresses) {
    const results = [];
  
    async function fetchData(address) {
      const apiUrl = `https://starkrocket.xyz/api/check_wallet?address=${address}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return { address, data };
      } catch (error) {
        return { address, error: error.message };
      }
    }
  
    const promises = addresses.map(address => fetchData(address));

    // Using Promise.all to execute all promises concurrently
    const resultsArray = await Promise.all(promises);
  
    // Pushing results to the final array
    results.push(...resultsArray);
  
    return results;
  }
  
  module.exports = checkWallets;