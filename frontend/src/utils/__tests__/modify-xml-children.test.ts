import replaceXMLChildren from "../replace-xml-children";
import { testDefaults, testSave, testSaveResult } from "../../data/testConstants";

test('should replace all elements with replacement element', () => {
  const serializer = new XMLSerializer();
  const replacement = testDefaults.documentElement;
  replaceXMLChildren(testSave, replacement);
  const saveResult = testSave.documentElement;
  const thing1 = testSaveResult.documentElement;
  const thing2 = testSave.documentElement;
  expect(thing1.isEqualNode(thing2)).toBe(true);
});
