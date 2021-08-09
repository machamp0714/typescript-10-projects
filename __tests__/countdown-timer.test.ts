import { format } from '../countdown-timer/countdown-timer';

describe('#format', () => {
  test('when times is less than 10', () => {
    expect(format(5)).toBe('05');
  });

  test('when time is greater than 10', () => {
    expect(format(10)).toBe('10');
  });
});
