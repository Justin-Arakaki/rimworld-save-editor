import sampleSave from '../data/sampleSave.rws'
import sampleDefaults from '../data/sampleDefaults.rws';
import createXMLDOC from '../utils/create-xml-doc';
import replaceXMLChildren from '../utils/replace-xml-children';
import createRWSFile from '../utils/create-rws-file';

export default async function modifySave() {
  const saveFile = await createXMLDOC(sampleSave);
  const defaults = await createXMLDOC(sampleDefaults);
  const schedule = defaults.getElementsByTagName('schedule')[0];
  replaceXMLChildren(saveFile, schedule);
  // createRWSFile(saveFile);
}
