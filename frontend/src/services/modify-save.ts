import sampleSave from '../data/sampleSave.rws'
import sampleDefaults from '../data/sampleDefaults.rws';
import createXMLDOC from '../utils/create-xml-doc';
import replaceXMLChildren from '../utils/replace-xml-children';

export default async function modifySave() {
  const saveFile = await createXMLDOC(sampleSave);
  const customSchedule = await createXMLDOC(sampleDefaults);
}
