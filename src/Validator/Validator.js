import { checkValidity, checkPaymentSystem } from '../js/handlers';

export default class Validator {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.check = this.check.bind(this);
    this.reset = this.reset.bind(this);
  }

  static get markup() {
    return `
      <div class="wrapper">
        <div class="card-section">
          <div class="card">Visa</div>
          <div class="card">Master Card</div>
          <div class="card">American Express</div>
          <div class="card">JCB</div>
          <div class="card">Union Pay</div>
          <div class="card">МИР</div>
        </div>
        <form class="input-section">
          <input name="number" type="text" class="number"></input>
          <button type="submit" class="submit">Click to Validate</button>
        </form>
      </div>
      <span class="tooltip hidden"></span>
     `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = Validator.markup;
    this.element = this.parentEl.querySelector('.wrapper');
    this.tooltip = document.querySelector('.tooltip');

    this.element.querySelector('.input-section').addEventListener('submit', this.check);
    this.element.querySelector('.number').addEventListener('input', this.reset);
  }

  check(e) {
    e.preventDefault();

    const inputValue = this.element.querySelector('.number').value.trim();
    if (checkValidity(inputValue)) {
      this.tooltip.classList.toggle('hidden');
      this.tooltip.textContent = 'Номер карты валиден';
      this.tooltip.style.color = 'green';
      this.checkSystem(inputValue);
    } else {
      this.tooltip.classList.toggle('hidden');
      this.tooltip.textContent = 'Невалидный номер карты';
      this.tooltip.style.color = 'red';
    }
  }

  checkSystem(inputValue) {
    const system = checkPaymentSystem(inputValue);
    const cards = this.element.querySelectorAll('.card');
    const highlighted = [...cards].find((el) => el.textContent === system);
    highlighted.classList.add('highlighted');
  }

  reset() {
    const cards = this.element.querySelectorAll('.card');
    cards.forEach((el) => el.classList.remove('highlighted'));
    const tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('hidden');
  }
}
