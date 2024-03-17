const crypto = require("crypto");
const bs58 = require("bs58");
const nacl = require("tweetnacl");

class SIWS {
	constructor() {
		this.domain;
		this.address;
		this.statement;
		this.signature;
		this.issued;
		this.expires;
	}

	package({ domain, address }) {
		this.domain = domain;
		this.address = address;
		const nonce = crypto.randomBytes(16).toString("hex");
		const statement = `I authorize ${this.domain} to start an account session with my address ${this.address.slice(0, 4)}...${this.address.slice(-4)}.\n\nNonce: ${nonce}`;
		this.statement = statement;
		return statement;
	}

	token({ domain, address, statement, signature, expires = 1800000 }) {
		const now = Date.now();
		this.domain = domain;
		this.address = address;
		this.statement = statement;
		this.signature = bs58.encode(signature);
		this.issued = now;
		this.expires = now + expires;
		const data = new Buffer.from(JSON.stringify(this));
		return data.toString("base64");
	}

	certificate({ token }) {
		this.domain = null;
		this.statement = null;
		const unauthorized = {
			domain: this.domain,
			address: null,
			statement: this.statement,
			signature: null,
			issued: null,
			expires: null
		};
		let data;
		try {
			data = Buffer.from(token, "base64");
		} catch (e) {
			return unauthorized;
		}
		const certificate = JSON.parse(data.toString("utf8"));
		this.domain = certificate.domain;
		this.address = certificate.address;
		this.statement = certificate.statement;
		this.signature = certificate.signature;
		this.issued = certificate.issued;
		this.expires = certificate.expires;
		if (Date.now() < this.expires) {
			const statementBytes = new TextEncoder().encode(this.statement);
			const publicKeyBytes = bs58.decode(this.address);
			const signatureBytes = bs58.decode(this.signature);
			const authorized = nacl.sign.detached.verify(
				statementBytes,
				signatureBytes,
				publicKeyBytes
			);
			if (!authorized) {
				return unauthorized;
			}
			return this;
		}
		return unauthorized;
	}
}

module.exports = {
	SIWS
};
