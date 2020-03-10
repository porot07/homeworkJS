import fs from 'fs';
import os from 'os';
import path from 'path';
import mergeFiles from '../src';

test('writeFile success', async () => {
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);

  const filepath1 = path.join(tmpDir, 'text');
  const filepath2 = path.join(tmpDir, 'text2');
  const filepath3 = path.join(tmpDir, 'merged');

  fs.writeFileSync(filepath1, 'Hello,');
  fs.writeFileSync(filepath2, 'World!!!');

  await mergeFiles(filepath1, filepath2, filepath3);

  const content = fs.readFileSync(filepath3, 'utf-8');

  expect(content).toEqual('Hello,\nWorld!!!');

});
//
test('writeFile fail', async () => {
  const fileData1 = 'Hello,';
  const filename1 = 'text';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);

  const filepath1 = path.join(tmpDir, filename1);
  const filepath2 = path.join(tmpDir, 'unknown');
  const filepath3 = path.join(tmpDir, 'merged');
  fs.writeFileSync(filepath1, fileData1);
  try {
    await mergeFiles(filepath1, filepath2, filepath3);
  } catch(e) {
    expect(e.code).toBe('ENOENT');
  }
});
