import { promises as fs } from 'fs';
import path from 'path';

export default (dirPath) => fs.readdir(dirPath)
  .then((files) => {
    const promises = files.map(
      (file) => fs.stat(path.join(dirPath, file)),
    );
    return Promise.all(promises);
  })
  .then((filesData) => filesData.reduce((acc, el) => (el.isFile() ? acc + el.size : acc), 0));
