declare module "@publicspace/solana" {
	/**
	 * Prepares a package with a unique statement for the user to sign.
	 * @param {Object} params - The parameters including domain and address.
	 * @returns An object of the result.
	 */
	export function prepare(params: { domain: string; address: string }): object;

	/**
	 * Creates a token that represents the signed authorization package.
	 * @param {Object} params - The parameters including domain, address, statement, signature, and optional expires.
	 * @returns An object of the result.
	 */
	export function token(params: {
		domain: string;
		address: string;
		statement: string;
		signature: Uint8Array;
		expires?: number;
	}): object;

	/**
	 * Verifies the token and returns the SIWS instance if the token is valid and authorized.
	 * @param {Object} params - The parameters including the token.
	 * @returns An object of the result.
	 */
	export function certificate(params: { token: string }): object;
}
