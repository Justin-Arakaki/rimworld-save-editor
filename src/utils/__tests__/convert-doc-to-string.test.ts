import convertDocToString from '../converters/convert-doc-to-string';
import convertStringToDoc from '../converters/convert-string-to-doc';
import { testSaveStr } from '../../data/test-utils/create-test-constants';

test('Document becomes type string with same nodes', () => {
	const formattedStr = testSaveStr.replaceAll(/\s/g, '');
	const doc = convertStringToDoc(formattedStr, { noWhiteSpace: true });
	const resultStr = convertDocToString(doc);

	expect(typeof resultStr).toBe('string');
	expect(resultStr).toBe(formattedStr);
});
