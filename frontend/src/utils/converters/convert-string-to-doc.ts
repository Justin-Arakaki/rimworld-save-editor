export interface Options {
	noWhiteSpace: boolean;
}

export default function convertStringToDoc(
	str: string,
	options?: Options
): XMLDocument {
	const parser = new DOMParser();
	if (options?.noWhiteSpace) {
		return parser.parseFromString(str.replaceAll(/\s/g, ''), 'text/xml');
	} else {
		return parser.parseFromString(str, 'text/xml');
	}
}
