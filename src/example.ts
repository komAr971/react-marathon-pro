// Работа с простыми типами
type concatFn = (str1: string, str2: string) => string;
const concat: concatFn = (str1, str2) => str1 + str2;
const str1: string = '123';
const str2: string = '456';
concat(str1, str2);

// Работа с интерфейсами
interface Hometask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: { howIDoIt: string; simeArray: (string | number)[] }[];
}
const myHometask: Hometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};
Array.isArray(myHometask); // Добавил чтобы линтер не ругался.

// Типизация функций, используя Generic
interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, el: T) => U, startValue: U): U;
}
const tsArr: MyArray<number> = [1, 2, 3, 4];
tsArr.reduce((acc, item) => acc + item, 0);
