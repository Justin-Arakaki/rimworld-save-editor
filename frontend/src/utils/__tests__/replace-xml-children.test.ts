import replaceXMLChildren from "../replace-xml-children";
import {
  createTestDefaults1,
  createTestSave,
  createTestResult1
} from "../../data/test-utils/create-test-xml";

test('Replaces all elements with replacement element', () => {
  const testSave = createTestSave();
  const testDefaults = createTestDefaults1();
  const testResult = createTestResult1();
  const replacement = testDefaults.getElementsByTagName('schedule')[0];

  replaceXMLChildren(testSave, replacement);
  const theoryResult = testResult.documentElement;
  const actualResult = testSave.documentElement;

  expect(actualResult).toEqual(theoryResult);
});
