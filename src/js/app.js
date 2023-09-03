import Validator from '../Validator/Validator';
import '../css/style.css';

const validator = new Validator(document.querySelector('.container'));
validator.bindToDOM();
