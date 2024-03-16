const bip39 = require("bip39");
const bs58 = require("bs58");
const nacl = require("tweetnacl");
nacl.util = require("tweetnacl-util");

class Wallet {
	mnemonic() {
		const mnemonic = bip39.generateMnemonic();
		return mnemonic;
	}

	keypair() {
		const keypair = nacl.sign.keyPair();
		const publicKeyBase58 = bs58.encode(Buffer.from(keypair.publicKey));
		const privateKeyBase58 = bs58.encode(Buffer.from(keypair.secretKey));
		return { publicKey: publicKeyBase58, privateKey: privateKeyBase58 };
	}

	keypairFromMnemonic({ mnemonic, passphrase }) {
		let seed;
		if (passphrase) {
			seed = bip39.mnemonicToSeedSync(mnemonic, passphrase).subarray(0, 32);
		} else {
			seed = bip39.mnemonicToSeedSync(mnemonic).subarray(0, 32);
		}
		const keypair = nacl.sign.keyPair.fromSeed(seed);
		const publicKeyBase58 = bs58.encode(Buffer.from(keypair.publicKey));
		const privateKeyBase58 = bs58.encode(Buffer.from(keypair.secretKey));
		return { publicKey: publicKeyBase58, privateKey: privateKeyBase58 };
	}

	sign({ message, privateKey }) {
		const privateKeyUint8Array = bs58.decode(privateKey);
		const keyPair = nacl.sign.keyPair.fromSecretKey(privateKeyUint8Array);
		const publicKey = keyPair.publicKey;
		const encodedMessage = nacl.util.decodeUTF8(message);
		const signature = nacl.sign.detached(encodedMessage, privateKeyUint8Array);
		const signatureBase58 = bs58.encode(Buffer.from(signature));
		const publicKeyBase58 = bs58.encode(Buffer.from(publicKey));
		const isValid = nacl.sign.detached.verify(
			encodedMessage,
			signature,
			publicKey
		);
		if (isValid) {
			return {
				valid: true,
				message: message,
				signature: signatureBase58,
				publicKey: publicKeyBase58
			};
		}
		return {
			valid: false,
			message: null,
			signature: null,
			publicKey: null
		};
	}

	verify({ message, signature, publicKey }) {
		const signatureUint8Array = bs58.decode(signature);
		const publicKeyUint8Array = bs58.decode(publicKey);
		const encodedMessage = nacl.util.decodeUTF8(message);
		const signatureBase58 = bs58.encode(Buffer.from(signatureUint8Array));
		const publicKeyBase58 = bs58.encode(Buffer.from(publicKeyUint8Array));
		const isValid = nacl.sign.detached.verify(
			encodedMessage,
			signatureUint8Array,
			publicKeyUint8Array
		);
		if (isValid) {
			return {
				valid: true,
				message: message,
				signature: signatureBase58,
				publicKey: publicKeyBase58
			};
		}
		return {
			valid: false,
			message: null,
			signature: null,
			publicKey: null
		};
	}
}

module.exports = {
	Wallet
};
