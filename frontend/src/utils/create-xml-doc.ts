export default async function createXMLDOC(
  path: string
): Promise<XMLDocument> {
  const parser = new DOMParser();
  return fetch(path)
    .then(res => res.text())
    .then(text => parser.parseFromString(text, 'text/xml'));
}
