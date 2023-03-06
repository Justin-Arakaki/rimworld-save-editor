export default function replaceXMLChildren(
  doc: XMLDocument,
  replacement: Element
) {
  const elementName = replacement.tagName;
  const elements = doc.getElementsByTagName(elementName);
  for (let element of elements) {
    element.replaceChildren(...replacement.children);
  }
}
