var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
    calculator.previousTotal = 10;
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should reset newTotal flag when number is clicked', function(){
    calculator.newTotal = true;
    calculator.numberClick(5);
    assert.strictEqual(calculator.newTotal, false);
  })

  it('should set runningTotal to clicked number when number is clicked', function(){
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 563);
  })

  it('should perform the operation for previousOperator when operator is clicked', function(){
    calculator.runningTotal = 5;
    calculator.previousOperator = '+';
    calculator.operatorClick('/');
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should reset previousOperator when "=" operator is clicked', function(){
    calculator.previousOperator = '+';
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousOperator, null);
  })

  it('should set previousTotal to current runningTotal when operator is clicked', function(){
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousTotal, 0);
  })

  it('should set newTotal to true when operator is clicked', function(){
    calculator.newTotal = false;
    calculator.operatorClick('+');
    assert.strictEqual(calculator.newTotal, true);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 7);
  })

  it('should set runningTotal to 0 when clear button is clicked', function(){
    calculator.runningTotal = 25;
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  })

  it('should reset previousOperator if runningTotal is 0 when clear button is clicked', function(){
    calculator.previousOperator = '*';
    calculator.clearClick();
    assert.strictEqual(calculator.previousOperator, null);
  })

  it('should set previousTotal to null if runningTotal is 0 when clear button is clicked', function(){
    calculator.clearClick();
    assert.strictEqual(calculator.previousTotal, null);
  })

  it('should clear runningTotal without affecting the calculation', function(){
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 18);
  })

});
