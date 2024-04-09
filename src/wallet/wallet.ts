declare module "@publicspace/solana" {
	/**
	 * Generates a mnemonic phrase.
	 * @returns The generated mnemonic phrase as a string.
	 */
	export function mnemonic(): string;

	/**
	 * Generates a new key pair.
	 * @returns An object of the result.
	 */
	export function keypair(): object;

	/**
	 * Generates a key pair from a mnemonic phrase.
	 * @param {Object} params - The parameters including the mnemonic and an optional passphrase.
	 * @returns An object of the result.
	 */
	export function keypairFromMnemonic(params: {
		mnemonic: string;
		passphrase?: string;
	}): object;

	/**
	 * Signs a message using a private key.
	 * @param {Object} params - The parameters including the message and private key.
	 * @returns An object of the result.
	 */
	export function sign(params: { message: string; privateKey: string }): object;

	/**
	 * Verifies a signed message.
	 * @param {Object} params - The parameters including the message, signature, and public key.
	 * @returns An object of the result.
	 */
	export function verify(params: {
		message: string;
		signature: string;
		publicKey: string;
	}): object;
}
