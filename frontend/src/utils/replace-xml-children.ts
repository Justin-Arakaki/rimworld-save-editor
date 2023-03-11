export default function replaceXMLChildren(
	doc: XMLDocument,
	replacement: Element
): void {
	const elementName = replacement.tagName;
	const elements = doc.getElementsByTagName(elementName);

	for (const element of elements) {
		const replacementCopy = replacement.cloneNode(true).childNodes;
		element.replaceChildren(...replacementCopy);
	}
}
