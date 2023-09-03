export function checkValidity(numberString) {
  if (Number.isNaN(numberString)) {
    return false;
  }

  const numberArray = [];
  const controlArray = [];
  for (let i = 0; i < numberString.length; i += 1) {
    numberArray.push(+numberString[i]);
  }

  const controlFigure = numberArray.pop();

  if (numberArray.length % 2 !== 0) {
    for (let i = 0; i < numberArray.length; i += 2) {
      if (numberArray[i] * 2 > 9) {
        const figure = numberArray[i] * 2 - 9;
        controlArray.push(figure);
      } else {
        const figure = numberArray[i] * 2;
        controlArray.push(figure);
      }
    }
    for (let i = 1; i < numberArray.length; i += 2) {
      controlArray.push(numberArray[i]);
    }
  } else {
    for (let i = 1; i < numberArray.length; i += 2) {
      if (numberArray[i] * 2 > 9) {
        const figure = numberArray[i] * 2 - 9;
        controlArray.push(figure);
      } else {
        const figure = numberArray[i] * 2;
        controlArray.push(figure);
      }
    }
    for (let i = 0; i < numberArray.length; i += 2) {
      controlArray.push(numberArray[i]);
    }
  }
  controlArray.push(controlFigure);
  const sum = controlArray.reduce((acc, number) => acc + number);
  if (sum % 10 === 0) {
    return true;
  }
  return false;
}

export function checkPaymentSystem(numberString) {
  if (numberString.startsWith('4')) {
    return 'Visa';
  }
  if (numberString.startsWith('5')) {
    return 'Master Card';
  }
  if (numberString.startsWith('6')) {
    return 'Union Pay';
  }
  if (numberString.startsWith('2')) {
    return 'МИР';
  }
  if (numberString.startsWith('34') || numberString.startsWith('35') || numberString.startsWith('36') || numberString.startsWith('37')) {
    return 'American Express';
  }
  if (numberString.startsWith('3')) {
    return 'JCB';
  }
  return 'undefined';
}
