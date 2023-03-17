import convertStringToDoc from '../../utils/convert-string-to-doc';

export const testSaveStr = `
  <savegame>
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
    </scheduleList>
    <thing>
      <outfits>
        <uniqueId>1</uniqueId>
        <deeper>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </deeper>
      </outfits>
    </thing>
  </savegame>
`;
export const testDefaultsStr1 = `
  <defaults>
    <schedule>
      <li>rep1</li>
      <li>rep2</li>
      <li>rep3</li>
      <li>rep4</li>
        <example>DeepTest</example>
      <li>rep5</li>
    </schedule>
  </defaults>`;
export const testDefaultsStr2 = `
  <defaults>
    <schedule>
      <li>rep1</li>
      <li>rep2</li>
      <li>rep3</li>
      <li>rep4</li>
        <example>DeepTest</example>
      <li>rep5</li>
    </schedule>
    <outfits>
      <uniqueId>1rep</uniqueId>
      <deeper>
        <li>1rep</li>
        <li>2rep</li>
      </deeper>
      <extra>thing</extra>
    </outfits>
  </defaults>`;
export const testResultStr1 = `
  <savegame>
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
    </scheduleList>
    <thing>
      <outfits>
        <uniqueId>1</uniqueId>
        <deeper>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </deeper>
      </outfits>
    </thing>
  </savegame>`;
export const testResultStr2 = `
  <savegame>
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
    </scheduleList>
    <thing>
      <outfits>
        <uniqueId>1rep</uniqueId>
        <deeper>
          <li>1rep</li>
          <li>2rep</li>
        </deeper>
        <extra>thing</extra>
      </outfits>
    </thing>
  </savegame>`;

export const createTestSave = () => convertStringToDoc(testSaveStr);
export const createTestDefaults1 = () => convertStringToDoc(testDefaultsStr1);
export const createTestResult1 = () => convertStringToDoc(testResultStr1);
export const createTestDefaults2 = () => convertStringToDoc(testDefaultsStr2);
export const createTestResult2 = () => convertStringToDoc(testResultStr2);
