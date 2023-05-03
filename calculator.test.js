const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 3333000;
    actual = sum(1000000, 2333000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-7, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 7;
    actual = sum(7, 0);
    expect(actual).toBe(expected);
  });

  test('can add two zeroes', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 800000;
    actual = subtract(1000000, 200000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers to equal negative', () => {
    expected = -4;
    actual = subtract(-7, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers to equal positive', () => {
    expected = 2;
    actual = subtract(-7, -9);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 7;
    actual = subtract(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 2000000;
    actual = multiply(1000, 2000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

    test('can divide small numbers', () => {
      expected = 2;
      actual = divide(6, 3);
      expect(actual).toBe(expected);
    });

    test('can divide big numbers', () => {
      expected = 1000;
      actual = divide(2000000, 2000);
      expect(actual).toBe(expected);
    });

    test('can divide by a negative number', () => {
      expected = -100;
      actual = divide(300, -3);
      expect(actual).toBe(expected);
    });

    test('can divide negative number by a positive number', () => {
      expected = -100;
      actual = divide(-300, 3);
      expect(actual).toBe(expected);
    });

    test('can divide negative number by another negative number', () => {
      expected = 100;
      actual = divide(-300, -3);
      expect(actual).toBe(expected);
    });

    test('can divide positive number by zero', () => {
      expected = Infinity;
      actual = divide(30, 0);
      expect(actual).toBe(expected);
    });

    test('can divide negative by zero', () => {
      expected = -Infinity;
      actual = divide(-30, 0);
      expect(actual).toBe(expected);
    });

});

describe('modulus', () => {

  test('can perform modulus function on small numbers - remainder 0', () => {
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function on small numbers - remainder 1', () => {
    expected = 1;
    actual = modulus(11, 2);
    expect(actual).toBe(expected)
  });

  test('can perform modulus function on big numbers - remainder 0', () => {
    expected = 0;
    actual = modulus(100000, 5000);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function on big numbers - remainder 3', () => {
    expected = 3;
    actual = modulus(100003, 5000);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function on negative number - remainder 0', () => {
    expected = 0;
    actual = modulus(-300, 50);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function on negative number - remainder 49', () => {
    expected = 49;
    actual = modulus(-301, 50);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function with negative number on positive number - remainder 0', () => {
    expected = 0;
    actual = modulus(300, -50);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function with negative number on positive number - remainder 1', () => {
    expected = -49;
    actual = modulus(301, -50);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function with negative number on negative number - remainder 0', () => {
    expected = 0;
    actual = modulus(-300, -50);
    expect(actual).toBe(expected);
  });

  test('can perform modulus function with negative number on negative number - remainder 1', () => {
    expected = -1;
    actual = modulus(-301, -50);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can perform even function to return correct boolean - returning true for even number', () => {
    expected = true;
    actual = even(6);
    expect(actual).toBe(expected);
  });

  test('can perform even function to return correct boolean - returning true for negative even number', () => {
    expected = true;
    actual = even(-6);
    expect(actual).toBe(expected);
  });

  test('can perform even function to return correct boolean - returning false for odd number', () => {
    expected = false;
    actual = even(7);
    expect(actual).toBe(expected);
  });

  test('can perform even function to return correct boolean - returning false for negative odd number', () => {
    expected = false;
    actual = even(-7);
    expect(actual).toBe(expected);
  });

  test('can perform even function to return correct boolean - returning true for zero', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can perform odd function to return correct boolean - returning false for even number', () => {
    expected = false;
    actual = odd(6);
    expect(actual).toBe(expected);
  });

  test('can perform odd function to return correct boolean - returning false for negative even number', () => {
    expected = false;
    actual = odd(-6);
    expect(actual).toBe(expected);
  });

  test('can perform odd function to return correct boolean - returning true for odd number', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('can perform odd function to return correct boolean - returning true for negative odd number', () => {
    expected = true;
    actual = odd(-7);
    expect(actual).toBe(expected);
  });

  test('can perform odd function to return correct boolean - returning false for zero', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });

});
