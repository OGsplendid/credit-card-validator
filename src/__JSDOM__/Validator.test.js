import Validator from '../Validator/Validator';

test('app has one "highlighted" class', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const validator = new Validator(container);

  validator.bindToDOM();

  container.querySelector('.number').value = '4111111111111111';
  container.querySelector('.submit').click();

  const cards = document.querySelectorAll('.card');
  const result = [...cards].some((el) => el.classList.contains('highlighted'));

  expect(result).toEqual(true);
});
