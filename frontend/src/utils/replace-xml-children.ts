export default function replaceXMLChildren(
  doc: XMLDocument,
  replacement: Element
) {
  const elementName = replacement.tagName;
  const elements = doc.getElementsByTagName(elementName);
  for (const element of elements) {
    element.replaceChildren(...replacement.children);
  }
}
