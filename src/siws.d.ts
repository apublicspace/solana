declare module "@publicspace/solana" {
	/**
	 * Prepares a package with a unique statement for the user to sign.
	 * @param {Object} params - The parameters including domain and address.
	 * @returns A JSON stringified HTTP response with a message to be signed if successful, otherwise an error.
	 */
	export function prepare(params: { domain: string; address: string }): string;

	/**
	 * Creates a token that represents the signed authorization package.
	 * @param {Object} params - The parameters including domain, address, statement, signature, and optional expires.
	 * @returns A JSON stringified HTTP response with a base64 encoded token if successful, otherwise an error.
	 */
	export function token(params: {
		domain: string;
		address: string;
		statement: string;
		signature: Uint8Array;
		expires?: number;
	}): string;

	/**
	 * Verifies the token and returns the SIWS instance if the token is valid and authorized.
	 * @param {Object} params - The parameters including the token.
	 * @returns A JSON stringified HTTP response with the certificate details if valid, unauthorized if expired or signature mismatch, or an error.
	 */
	export function certificate(params: { token: string }): string;

	export { prepare, token, certificate };
}
