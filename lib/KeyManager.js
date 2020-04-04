const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  set(key) {
    this.conf.set("key", key);
    return key;
  }

  show() {
    const key = this.conf.get("key");
    if (!key) {
      throw new Error("API key not set - Get key at http://nomics.com");
    }
    return key;
  }

  remove() {
    const key = this.conf.get("key");
    if (!key) {
      throw new Error("API key not set - Get key at http://nomics.com");
    }
    this.conf.delete("key");
    return;
  }
}

module.exports = KeyManager;
