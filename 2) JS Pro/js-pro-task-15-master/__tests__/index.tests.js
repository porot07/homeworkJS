import fs from 'fs';
import os from 'os';
import path from 'path';
import mergeFiles from '../src';

test('writeFile success', (done) => {
  const fileData1 = 'Hello,';
  const fileData2 = 'World!!!';
  const filename1 = 'text';
  const filename2 = 'text2';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);

  const filepath1 = path.join(tmpDir, filename1);
  const filepath2 = path.join(tmpDir, filename2);
  const filepath3 = path.join(tmpDir, 'merged');
  fs.writeFileSync(filepath1, fileData1);
  fs.writeFileSync(filepath2, fileData2);

  mergeFiles(filepath1, filepath2, filepath3, (err) => {
    if (err) {
      done.fail(err);
      return;
    }
    const content = fs.readFileSync(filepath3, 'utf-8');
    expect(content).toEqual('Hello,\nWorld!!!');
    done();
  })
});

test('writeFile fail', (done) => {
  const fileData1 = 'Hello,';
  const filename1 = 'text';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);

  const filepath1 = path.join(tmpDir, filename1);
  const filepath2 = path.join(tmpDir, 'unknown');
  const filepath3 = path.join(tmpDir, 'merged');
  fs.writeFileSync(filepath1, fileData1);

  mergeFiles(filepath1, filepath2, filepath3, (err) => {
    expect(err.code).toEqual('ENOENT');
    done();
  })
});

test('writeFile fail 2', (done) => {
  const fileData1 = 'Hello,';
  const fileData2 = 'World!!!';
  const filename1 = 'text';
  const filename2 = 'text2';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);

  const filepath1 = path.join(tmpDir, filename1);
  const filepath2 = path.join(tmpDir, filename2);
  const filepath3 = path.join(tmpDir, 'merged');

  fs.writeFileSync(filepath2, fileData2);

  mergeFiles(filepath1, filepath2, filepath3, (err) => {
    expect(err.code).toEqual('ENOENT');
    done();
  })
});