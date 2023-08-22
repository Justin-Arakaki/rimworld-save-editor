import convertStringToDoc from './convert-string-to-doc';

export default async function convertFileToDoc(
	file: File
): Promise<XMLDocument> {
	const text = await file.text();
	return convertStringToDoc(text);
}
