import FileSaver from 'file-saver';

export default function createRWSFile(doc: Document): void {
	const serializer = new XMLSerializer();
	// TODO: needs to be a Node
	const root = doc.getRootNode();
	const xmlString = serializer.serializeToString(root);
	const blob = new Blob([xmlString], { type: 'text/xml' });
	FileSaver.saveAs(blob, 'newSave.rws');
}
