import { toCapitalizeFirstLetter } from './example';

describe('toCapitalizeFirstLetter', () => {
  test('Должна вернуть первый символ входной строки в верхнем регистре', () => {
    expect(toCapitalizeFirstLetter('some String')).toBe('Some String');
  });

  test('Должна вернуть пустую строку, если входная строка пустая', () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });

  test('Должна вернуть ту же строку, если первый символ у входной строки в верхнем регистре', () => {
    expect(toCapitalizeFirstLetter('Some String')).toBe('Some String');
  });
});
