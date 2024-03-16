const SIWS = require("./src/siws.js");
const Wallet = require("./src/wallet.js");

module.exports = {
	...SIWS,
	...Wallet
};
