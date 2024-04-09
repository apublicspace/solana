declare module "@publicspace/solana" {
	/**
	 * Processes the provided data and returns a JSON stringified HTTP response.
	 * The response varies depending on the presence of `unauthorized` or `error` fields in the data.
	 * @param {Object} params - The parameters including the data.
	 * @returns A JSON stringified HTTP response.
	 */
	export function response(data: {
		unauthorized?: string;
		error?: string;
		[key: string]: any;
	}): string;
}
