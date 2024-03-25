declare module "@publicspace/solana" {
	/**
	 * Generates a mnemonic phrase.
	 * @returns The generated mnemonic phrase as a string.
	 */
	export function mnemonic(): string;

	/**
	 * Generates a new key pair.
	 * @returns A JSON stringified HTTP response with public and private keys in Base58 format if successful, otherwise an error.
	 */
	export function keypair(): string;

	/**
	 * Generates a key pair from a mnemonic phrase.
	 * @param {Object} params - The parameters including the mnemonic and an optional passphrase.
	 * @returns A JSON stringified HTTP response with public and private keys in Base58 format from mnemonic and passphrase if successful, otherwise an error.
	 */
	export function keypairFromMnemonic(params: {
		mnemonic: string;
		passphrase?: string;
	}): string;

	/**
	 * Signs a message using a private key.
	 * @param {Object} params - The parameters including the message and private key.
	 * @returns A JSON stringified HTTP response with the validation result, message, signature, and public key if successful, otherwise an error.
	 */
	export function sign(params: { message: string; privateKey: string }): string;

	/**
	 * Verifies a signed message.
	 * @param {Object} params - The parameters including the message, signature, and public key.
	 * @returns An object containing the validation result, message, signature, and public key if valid, otherwise nulls.
	 */
	export function verify(params: {
		message: string;
		signature: string;
		publicKey: string;
	}): string;

	export { mnemonic, keypair, keypairFromMnemonic, sign, verify };
}
