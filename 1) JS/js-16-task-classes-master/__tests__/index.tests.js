import { Animal, Cat, Dog } from '../src';

test('Cat', () => {
  const barsik = new Cat('Barsik', 'fish');
  expect(barsik.speak()).toEqual('Barsik says meow');
  expect(barsik.getFavoriteFood()).toEqual('Barsik likes fish');
});

test('Dog', () => {
  const sharik = new Dog('Sharik', 'bone');
  expect(sharik.speak()).toEqual('Sharik says woof');
  expect(sharik.getFavoriteFood()).toEqual('Sharik likes bone');
})

test('Both', () => {
  const barsik = new Cat('Barsik', 'fish');
  const sharik = new Dog('Sharik', 'bone');

  expect(barsik.getName()).toEqual('Barsik');
  expect(sharik.getName()).toEqual('Sharik');
});
