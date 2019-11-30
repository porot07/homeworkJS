import power from '../src/power';


describe('power', () => {
  it('should work', () => {
    expect(power(2, 10)).toBe(1024);
    expect(power(3, 4)).toBe(81);
    expect(power(10)).toBe(10);
    expect(power()).toBeNull();
  });
});