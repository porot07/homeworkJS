import fs from 'fs';
import os from 'os';
import path from 'path';
import getFilesSize from '../src';

test('total sizes', (done) => {
  const fileNames = [
    { name: 'file', data: 'files' },
    { name: 'test-file', data: 'more data in file' },
    { name: 'text', data: 'text data' },
    { name: 'new-file', data: 'text text text text' },
  ];
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  fileNames.forEach(({ name, data }) => {
    const filepath = path.join(tmpDir, name);
    fs.writeFileSync(filepath, data);
  });

  getFilesSize(tmpDir)
    .then((size) => {
      expect(size).toBe(50);
      done();
    });
});

test('total sizes of direcories', (done) => {
  const fileNames = [
    { name: 'file', data: 'files' },
    { name: 'test-file', data: 'more data in file' },
    { name: 'text', data: 'text data' },
    { name: 'new-file', data: 'text text text text' },
  ];
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  fileNames.forEach(({ name, data }) => {
    const filepath = path.join(tmpDir, name);
    fs.mkdirSync(filepath);
  });

  getFilesSize(tmpDir)
    .then((size) => {
      expect(size).toBe(0);
      done();
    });
});
