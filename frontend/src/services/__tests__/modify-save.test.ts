import modifySave from '../modify-save';
import {
	createTestSave,
	createTestDefaults2,
	createTestResult2,
} from '../../data/test-utils/create-test-xml';

test.skip('Patches save file with defaults', () => {
	const testSave = createTestSave();
	const testDefaults = createTestDefaults2();
	const testResult = createTestResult2();

	modifySave(testSave, testDefaults);
	const theoryResult = testResult.documentElement;
	const actualResult = testSave.documentElement;

	expect(actualResult).toEqual(theoryResult);
});
