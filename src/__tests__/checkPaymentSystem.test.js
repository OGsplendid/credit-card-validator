import { checkPaymentSystem } from '../js/handlers';

test.each([
  ['4111111111111111', 'Visa'],
  ['4627100101654724', 'Visa'],
  ['5467929858074128', 'Master Card'],
  ['378282246310005', 'American Express'],
  ['3566002020360505', 'American Express'],
  ['6200000000000062', 'Union Pay'],
  ['2200000000000079', 'МИР'],
  ['0000000000000001', 'undefined'],
  ['qwerty', 'undefined'],
])('should return correct payment system or "undefined"', (a, expected) => {
  const result = checkPaymentSystem(a);
  expect(result).toBe(expected);
});
