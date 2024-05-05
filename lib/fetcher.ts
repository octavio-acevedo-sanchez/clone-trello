export const fetcher = async (url: string): Promise<any> =>
	await fetch(url).then(async res => await res.json());
