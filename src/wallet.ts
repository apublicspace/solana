declare module "@publicspace/solana" {
	class Wallet {
		/**
		 * Generates a mnemonic phrase.
		 * @returns The generated mnemonic phrase as a string.
		 */
		mnemonic(): string;

		/**
		 * Generates a new key pair.
		 * @returns An object containing the public and private keys in Base58 format.
		 */
		keyPair(): {
			publicKey: string;
			privateKey: string;
		};

		/**
		 * Generates a key pair from a mnemonic phrase.
		 * @param {Object} params - The parameters including the mnemonic and an optional passphrase.
		 * @returns An object containing the public and private keys in Base58 format.
		 */
		keyPairFromMnemonic(params: { mnemonic: string; passphrase?: string }): {
			publicKey: string;
			privateKey: string;
		};

		/**
		 * Signs a message using a private key.
		 * @param {Object} params - The parameters including the message and private key.
		 * @returns An object containing the validation result, message, signature, and public key if valid, otherwise nulls.
		 */
		sign(params: { message: string; privateKey: string }): {
			valid: boolean;
			message: string | null;
			signature: string | null;
			publicKey: string | null;
		};

		/**
		 * Verifies a signed message.
		 * @param {Object} params - The parameters including the message, signature, and public key.
		 * @returns An object containing the validation result, message, signature, and public key if valid, otherwise nulls.
		 */
		verify(params: { message: string; signature: string; publicKey: string }): {
			valid: boolean;
			message: string | null;
			signature: string | null;
			publicKey: string | null;
		};
	}

	export { Wallet };
}
