//Convert prices in https://reklama.setupad.com to dollars using the current exchange rate from https://exchangeratesapi.io/ API. The script has to work just pasting it to the Dev Tools console. Please upload the script to https://gist.github.com/

// price (arrayWithPrices)

const endpoint = `http://api.exchangeratesapi.io/v1/latest?access_key=d416f73c33db075c966ebe330dfb7cfc&format=1`;
const pricesEUR = [200, 500, 1000];
// insert endpoint and prices array
function price(prices, endpoint) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      let USDexchRate = data.rates.USD;
      const pricesUSD = prices.map((item) => (item * USDexchRate).toFixed(2));
      console.log(pricesUSD);
    });
}
price(pricesEUR, endpoint);
