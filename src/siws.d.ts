declare module "@publicspace/solana" {
	class SIWS {
		/**
		 * The domain intended for the session.
		 */
		domain?: string;

		/**
		 * The user's public address.
		 */
		address?: string;

		/**
		 * A statement provided during the authorization process.
		 */
		statement?: string;

		/**
		 * The signature of the statement.
		 */
		signature?: string;

		/**
		 * The timestamp when the certificate was issued.
		 */
		issued?: number;

		/**
		 * The expiration timestamp of the certificate.
		 */
		expires?: number;

		/**
		 * Constructs an instance of the SIWS class.
		 */
		constructor();

		/**
		 * Prepares a package with a unique statement for the user to sign.
		 * @param {Object} params - The parameters including domain and address.
		 * @returns The authorization statement as a string.
		 */
		package(params: { domain: string; address: string }): string;

		/**
		 * Creates a token that represents the signed authorization package.
		 * @param {Object} params - The parameters including domain, address, statement, signature, and optional expires.
		 * @returns The token as a Base64 encoded string.
		 */
		token(params: {
			domain: string;
			address: string;
			statement: string;
			signature: Uint8Array;
			expires?: number;
		}): string;

		/**
		 * Verifies the token and returns the SIWS instance if the token is valid and authorized.
		 * @param {Object} params - The parameters including the token.
		 * @returns An object of the certificate, fully populated if authorized, or with partial nullified fields if unauthorized or expired.
		 */
		certificate(params: { token: string }): {
			domain: string;
			address: string | null;
			statement: string;
			signature: string | null;
			issued: number | null;
			expires: number | null;
		};
	}

	export { SIWS };
}
