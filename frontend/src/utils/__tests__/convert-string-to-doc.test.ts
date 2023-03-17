import convertStringToDoc from '../convert-string-to-doc';
import {
	testDefaultsStr1,
	testSaveStr,
} from '../../data/test-utils/create-test-xml';

test('string becomes type Document with same nodes', () => {
	// const testDoc = convertStringToDoc(testSaveStr);
	// const element = testDoc.body.firstChild;
	const test = testSaveStr;
	const parser = new DOMParser();
	const doc1 = parser.parseFromString(testSaveStr, 'text/xml');
	console.log(doc1.getElementsByTagName('savegame')[0].children);
	expect(doc1.getRootNode().children[0].children).toBe('asdf');
	// expect(element).toEqual('');
});
