import replaceXMLChildren from "../replace-xml-children";

test('should replace collection with replacement element children', () => {
  const parser = new DOMParser();
  const saveData = `
    <scheduleList>
      <schedule>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </schedule>
      <schedule>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </schedule>
    </scheduleList>`;
  const customData = `
    <schedule>
      <li>rep1</li>
      <li>rep2</li>
      <li>rep3</li>
      <li>rep4</li>
      <li>rep5</li>
    </schedule>`;
  const saveDataDoc = parser.parseFromString(saveData, 'text/xml');
  const customDataDoc = parser.parseFromString(customData, 'text/xml');
  const collection = saveDataDoc.getElementsByTagName('schedule');
  const replacement = customDataDoc.documentElement;
  replaceXMLChildren(collection, replacement);
  const
});
