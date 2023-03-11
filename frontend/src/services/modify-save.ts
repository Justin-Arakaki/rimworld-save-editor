import replaceXMLChildren from '../utils/replace-xml-children';

export default function modifySave(
	saveFile: XMLDocument,
	defaults: XMLDocument
): void {
	const defaultEls = defaults.documentElement.children;

	for (const el of defaultEls) {
		replaceXMLChildren(saveFile, el);
	}
}
