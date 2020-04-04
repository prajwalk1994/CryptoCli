const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }

  async getPrice(coinOpt, curOpt) {
    try {
      const formatter = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: curOpt
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`
      );
      let output = "";
      res.data.forEach(coin => {
        output += `Coin: ${coin.name.blue} (${coin.symbol.red}) | Price: ${
          formatter.format(coin.price).yellow
        } | Rank: ${coin.rank.green}\n`;
      });
      return output;
    } catch (error) {
      console.log(error.message.red);
    }
  }
}

module.exports = CryptoAPI;
