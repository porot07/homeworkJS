import { promises as fs } from 'fs';

export default async (firstFile, secondFile, mergedFiles) => {
  const firstData = await fs.readFile(firstFile, 'utf-8');
  const secondData = await fs.readFile(secondFile, 'utf-8');
  await fs.writeFile(mergedFiles, `${firstData}\n${secondData}`);
};
