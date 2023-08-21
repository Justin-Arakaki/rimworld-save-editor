import modifySave from '../modify-save';
import {
	createTestSave,
	createTestDefaults2,
	createTestResult2,
} from '../../data/test-utils/create-test-constants';

test.skip('patches save file with defaults', () => {
	const save = createTestSave();
	const defaults = createTestDefaults2();
	const result = createTestResult2();
	let theoryResult: Element, actualResult: Element;

	modifySave(save, defaults);
	theoryResult = result.documentElement;
	actualResult = save.documentElement;

	expect(actualResult).toEqual(theoryResult);
});
