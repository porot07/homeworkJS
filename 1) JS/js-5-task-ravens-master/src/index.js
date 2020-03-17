// See README.md

export default (ravens) => {
  if (ravens !== 0 && !ravens) {
  //if (ravens === undefined) {
    return null;
  }
  const str = `На ветке сидит ${ravens} ворон`;
  let endWord = '';
  if (ravens % 100 < 11 || ravens % 100 > 14) {
    switch (ravens % 10) {
      case 1: endWord = 'а'; break;
      case 2:
      case 3:
      case 4: endWord = 'ы'; break;
      default:
    }
  }
  return str + endWord;
};
