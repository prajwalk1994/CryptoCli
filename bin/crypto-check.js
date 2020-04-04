const program = require("commander");
const check = require("../actions/check");

program
  .command("price")
  .description("Check Price of Cryptocurrency")
  .option("--coin <type>", "Enter the Crypto for Price", "BTC,ETH,XRP")
  .option("--cur <type>", "Change the Currency", "USD")
  .action(opts => check.price(opts));

program.parse(process.argv);
