import { getHotelBlock, getDepartment } from '../src/hotel';

it('getHotelBlock', () => {
  expect(getHotelBlock(1100)).toBe('A');
  expect(getHotelBlock(1120)).toBe('A');
  expect(getHotelBlock(2100)).toBe('B');
  expect(getHotelBlock(2120)).toBe('B');
  expect(getHotelBlock(3100)).toBe('C');
  expect(getHotelBlock(3120)).toBe('C');
  expect(getHotelBlock(3121)).toBeNull();
  expect(getHotelBlock(990)).toBeNull();
});

it('getDepartment', () => {
  expect(getDepartment(1)).toBe('Reception');
  expect(getDepartment(2)).toBe('Restaurant');
  expect(getDepartment(3)).toBe('Emergency');
  expect(getDepartment(4)).toBe('Car rent');
  expect(getDepartment(5)).toBe('Pool');
  expect(getDepartment(6)).toBe('Spa salon');
  expect(getDepartment(7)).toBeNull();
})