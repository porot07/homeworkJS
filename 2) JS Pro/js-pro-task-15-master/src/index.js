import fs from 'fs';

export default (firstPath, secondPath, mergedFile, cb) => {
  fs.readFile(firstPath, 'utf-8', (firstErr, firstData) => {
    if (firstErr) {
      cb(firstErr);
      return;
    }
    fs.readFile(secondPath, 'utf-8', (secondErr, secondData) => {
      if (secondErr) {
        cb(secondErr);
        return;
      }
      fs.writeFile(mergedFile, `${firstData}\n${secondData}`, (thirdErr) => cb(thirdErr));
    });
  });
};
