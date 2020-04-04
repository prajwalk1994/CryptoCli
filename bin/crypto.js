#!/usr/bin/env node
const program = require("commander");
const package = require("../package.json");

program
  .version(package.version)
  .command("key", "Manage Key -- Get Key from http://nomics.com")
  .command("check", "Check price info from http://nomics.com")
  .parse(process.argv);
