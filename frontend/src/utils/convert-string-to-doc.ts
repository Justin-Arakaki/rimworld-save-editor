export default function convertStringToDoc(string: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(string.replaceAll(/\s/g, ''), 'text/xml');
}
