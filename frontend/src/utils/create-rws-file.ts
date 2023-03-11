import FileSaver, { saveAs } from "file-saver";

export default function createRWSFile(doc: XMLDocument): void {
  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(doc);
  const blob = new Blob([xmlString], { type: "text/xml" });
  FileSaver.saveAs(blob, "newSave.rws");
}
