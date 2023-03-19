import convertStringToDoc from '../converters/convert-string-to-doc';
import { testSaveStr } from '../../data/test-utils/create-test-constants';

test('string becomes type Document with same nodes', () => {
	const doc = convertStringToDoc(testSaveStr);
	const docElement = doc.documentElement;
	const deeperNode = docElement.children[1].children[0].children[1];

	expect(doc.constructor.name).toBe('Document');
	expect(docElement.tagName).toBe('savegame');
	expect(deeperNode.children[1].tagName).toBe('li');
	expect(deeperNode.children[2].innerHTML).toBe('3');
});
