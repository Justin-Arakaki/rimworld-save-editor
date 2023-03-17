export default function convertStringToDoc(string: string): XMLDocument {
	const parser = new DOMParser();
	// return parser.parseFromString(string.replaceAll(/\s/g, ''), 'text/xml');
	return parser.parseFromString(string, 'application/xml');
}
