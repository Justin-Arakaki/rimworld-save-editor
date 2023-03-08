const parser = new DOMParser();
const testSaveStr = `
  <scheduleList>
    <schedule>
      <li>1</li>
      <li>2</li>
      <li>3</li>
        <example>Deep</example>
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
const testDefaultsStr = `
  <schedule>
    <li>rep1</li>
    <li>rep2</li>
    <li>rep3</li>
    <li>rep4</li>
      <example>DeepTest</example>
    <li>rep5</li>
  </schedule>`;
const testResultStr = `
  <scheduleList>
    <schedule>
      <li>rep1</li>
      <li>rep2</li>
      <li>rep3</li>
      <li>rep4</li>
        <example>DeepTest</example>
      <li>rep5</li>
    </schedule>
    <schedule>
      <li>rep1</li>
      <li>rep2</li>
      <li>rep3</li>
      <li>rep4</li>
        <example>DeepTest</example>
      <li>rep5</li>
    </schedule>
  </scheduleList>`;
export const testSave = parser.parseFromString(
  testSaveStr.replaceAll(/\s/g,''), 'text/xml');
export const testDefaults = parser.parseFromString(
  testDefaultsStr.replaceAll(/\s/g, ''), 'text/xml');
export const testSaveResult = parser.parseFromString(
  testResultStr.replaceAll(/\s/g, ''), 'text/xml');
