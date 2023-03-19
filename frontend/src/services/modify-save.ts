import replaceXMLChildren from '../utils/replace-xml-children';

export default async function modifySave(
	saveFile: XMLDocument,
	defaults: XMLDocument
): Promise<void> {
	const defaultEls = defaults.documentElement.children;

	for (const el of defaultEls) {
		replaceXMLChildren(saveFile, el);
	}
}
