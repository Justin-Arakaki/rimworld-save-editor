export default function convertDocToString(doc: XMLDocument) {
	const serializer = new XMLSerializer();
	return serializer.serializeToString(doc);
}
