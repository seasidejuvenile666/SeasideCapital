import convertUpperCaseToLowercase from './convertUpperCaseToLowercase';

async function checkWallets(addresses) {
  const results = [];

  // Helper function to fetch data for a single address
  async function fetchData(address) {
    try {
      const lowercaseAddress = await convertUpperCaseToLowercase(address);
      const apiUrl = `https://geteligibleuserrequest-xqbg2swtrq-uc.a.run.app/?address=&claimAddress=${lowercaseAddress}`;

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

  // Mapping each address to a promise for concurrent execution
  const promises = addresses.map(address => fetchData(address));

  // Using Promise.all to execute all promises concurrently
  const resultsArray = await Promise.all(promises);

  // Pushing results to the final array
  results.push(...resultsArray);

  return results;
}

export default checkWallets;