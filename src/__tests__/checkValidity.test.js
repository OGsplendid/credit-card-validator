import { checkValidity } from '../js/handlers';

test.each([
  ['4111111111111111', true],
  ['4627100101654724', true],
  ['5467929858074128', true],
  ['30000000000004', true],
  ['3530111333300000', true],
  ['375700000000002', true],
  ['3453278573293429', false],
  ['0000000000000001', false],
  ['qwerty', false],
])('should return correct boolean values', (a, expected) => {
  const result = checkValidity(a);
  expect(result).toEqual(expected);
});
