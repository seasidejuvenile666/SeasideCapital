async function checkWallet(address) {
  const apiUrl = `https://services.flystarter.io/airdrop/get/${address}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const quantity = data.statusCode === 200 ? 1100 : 0;

    return { address, data, quantity }
  } catch (error) {
    console.error(`Error fetching wallet data for address ${address}:`, error);
    return { address, error: error.message, quantity: 0 };
  }
}

module.exports = checkWallet;