// async function checkWallets(addresses) {
//     const results = [];
  
//     for (const address of addresses) {
//       const apiUrl = `https://starkrocket.xyz/api/check_wallet?address=${address}`;
  
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         results.push({ address, data });
//       } catch (error) {
//         results.push({ address, error: error.message });
//       }
//     }
  
//     return results;
//   }
  
//   module.exports = checkWallets;