import FileSaver from 'file-saver';

export default async function createRWSFile(doc: Document): Promise<void> {
	const serializer = new XMLSerializer();
	const root = doc.getRootNode();
	const xmlString = serializer.serializeToString(root);
	const blob = new Blob([xmlString], { type: 'application/xml' });
	FileSaver.saveAs(blob, 'newSave.rws');
}
