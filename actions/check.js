const CryptoAPI = require("../lib/CryptoAPI");
const KeyManager = require("../lib/KeyManager");
const colors = require("colors");

const check = {
  price: async opts => {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.show();
      const api = new CryptoAPI(key);
      const outputData = await api.getPrice(opts.coin, opts.cur);
      console.log(outputData);
    } catch (error) {
      console.error(error.message.red);
    }
  }
};

module.exports = check;
