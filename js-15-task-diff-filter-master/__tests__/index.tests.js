import diffFilter from '../src';

test('diffFilter', () => {
  const geese = new Set(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
  const all = new Set(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

  expect(diffFilter(all, geese)).toEqual(new Set(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]));

  const set1 = new Set(['one', false, 3]);
  const set2 = new Set([5, 3, true, 'two']);
  const result = diffFilter(set1, set2);
  expect(result).toEqual(new Set(['one', false]));
  const result2 = diffFilter(new Set([]), new Set([2, 3]));
  expect(result2).toEqual(new Set([]));
});