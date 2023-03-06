export default function replaceXMLChildren(
  elements: HTMLCollection,
  replacement: Element
) {
  for (let element of elements) {
    element.replaceChildren(...replacement.children);
  }
}
