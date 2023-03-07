import replaceXMLChildren from "../replace-xml-children";
import { testDefaults, testSave, testSaveResult } from "../../data/testConstants";

test('should replace collection with replacement element children', () => {
  const replacement = testDefaults.documentElement;
  replaceXMLChildren(testSave, replacement);
  const saveResult = testSave.documentElement;
  expect(testSave.documentElement).toBe(testSaveResult.documentElement);
});
