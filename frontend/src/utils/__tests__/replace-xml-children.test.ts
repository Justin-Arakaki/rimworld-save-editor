import replaceXMLChildren from '../replace-xml-children';
import {
	createTestDefaults1,
	createTestSave,
	createTestResult1,
} from '../../data/test-utils/create-test-constants';

test('replaces all elements within a Document with replacement element', () => {
	const save = createTestSave();
	const defaults = createTestDefaults1();
	const result = createTestResult1();
	const replacement = defaults.getElementsByTagName('schedule')[0];
	let theoryResult: Element, actualResult: Element;

	replaceXMLChildren(save, replacement);
	theoryResult = result.documentElement;
	actualResult = save.documentElement;

	expect(save.constructor.name).toBe('Document');
	expect(actualResult).toEqual(theoryResult);
});
