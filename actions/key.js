const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");

const key = {
  show: () => {
    try {
      const keyManager = new KeyManager();
      const apiKey = keyManager.show();
      console.log("Current API key: ".blue + apiKey);
      return apiKey;
    } catch (error) {
      console.log(error.message.red);
    }
  },

  set: async () => {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key: ".green,
        validate: apiKey => (apiKey === "" ? "Enter a Valid Key".red : true)
      }
    ]);

    const key = keyManager.set(input.key);
    if (key) {
      console.log("API key set!".blue);
    }
    return key;
  },

  remove: () => {
    try {
      const keyManager = new KeyManager();
      keyManager.remove();
      console.log("API key removed!".red);
      return;
    } catch (error) {
      console.log(error.message.red);
    }
  }
};

module.exports = key;
