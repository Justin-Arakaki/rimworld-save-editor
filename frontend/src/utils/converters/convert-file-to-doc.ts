import convertStringToDoc from './convert-string-to-doc';

export default async function convertFileToDoc(file: File): Promise<Document> {
	const text = await file.text();
	return convertStringToDoc(text);
}
