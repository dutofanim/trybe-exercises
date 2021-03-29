function sum(a,b) {
  return a + b;
};

function subtraction(a,b) {
  return a - b;
};

function multiplication(a,b) {
  return a * b;
};

function division(a,b) {
  return a / b;
};

function moduleOfDivision(a,b) {
  return a % b;
};

function greaterThan(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

function greaterThan3(a,b,c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
};

function positiveNegativeTest(a) {
  if (a === 0) {
    return 'zero';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 'positive';
  }
}

