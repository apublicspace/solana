const crypto = require("crypto");
const bs58 = require("bs58");
const nacl = require("tweetnacl");
const { ok, unauthorized, error } = require("./utils/response.js");

function prepare({ domain, address }) {
	try {
		const nonce = crypto.randomBytes(16).toString("hex");
		const statement = `I authorize ${domain} to start an account session with my address ${address.slice(0, 4)}...${address.slice(-4)}.\n\nNonce: ${nonce}`;
		return ok("created message", statement);
	} catch (e) {
		return error("failed to prepare message");
	}
}

function token({ domain, address, statement, signature, expires = 1800000 }) {
	try {
		const now = Date.now();
		const cert = {
			domain,
			address,
			statement,
			signature: bs58.encode(signature),
			issued: now,
			expires: now + expires
		};
		const data = Buffer.from(JSON.stringify(cert));
		return ok("created token", data.toString("base64"));
	} catch (e) {
		return error("failed to create token");
	}
}

function certificate({ token }) {
	try {
		const data = Buffer.from(token, "base64");
		const certificate = JSON.parse(data.toString("utf8"));
		if (Date.now() >= certificate.expires) {
			return unauthorized("certificate expired");
		}
		const statementBytes = new TextEncoder().encode(certificate.statement);
		const publicKeyBytes = bs58.decode(certificate.address);
		const signatureBytes = bs58.decode(certificate.signature);
		const authorized = nacl.sign.detached.verify(
			statementBytes,
			signatureBytes,
			publicKeyBytes
		);
		if (!authorized) {
			return unauthorized("bad signature");
		}
		return ok("valid certificate", certificate);
	} catch (e) {
		return error("failed to decode token");
	}
}

module.exports = { prepare, token, certificate };
