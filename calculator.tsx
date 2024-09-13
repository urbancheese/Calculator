import React, { useState } from 'react';

const CalculatorApp = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [memory, setMemory] = useState('0');

  const handleNumberClick = (number: string) => {
    if (currentNumber === '0') {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleOperatorClick = (op: string) => {
    setPreviousNumber(currentNumber);
    setOperator(op);
    setCurrentNumber('0');
  };

  const handleEqualsClick = () => {
    let result: number;
    switch (operator) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      case '^':
        result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
        break;
      case 'sqrt':
        result = Math.sqrt(parseFloat(previousNumber));
        break;
      case 'log':
        result = Math.log10(parseFloat(previousNumber));
        break;
      case 'ln':
        result = Math.log(parseFloat(previousNumber));
        break;
      case 'sin':
        result = Math.sin(parseFloat(previousNumber));
        break;
      case 'cos':
        result = Math.cos(parseFloat(previousNumber));
        break;
      case 'tan':
        result = Math.tan(parseFloat(previousNumber));
        break;
      default:
        result = 0;
    }
    setCurrentNumber(result.toString());
    setPreviousNumber('');
    setOperator('');
  };

  const handleClearClick = () => {
    setCurrentNumber('0');
    setPreviousNumber('');
    setOperator('');
  };

  const handleMemoryClick = () => {
    setMemory(currentNumber);
  };

  const handleMemoryRecallClick = () => {
    setCurrentNumber(memory);
  };

  const handleMemoryClearClick = () => {
    setMemory('0');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="text-3xl font-bold mb-4">{currentNumber}</div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('7')}
          >
            7
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('8')}
          >
            8
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('9')}
          >
            9
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('/')}
          >
            /
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('4')}
          >
            4
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('5')}
          >
            5
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('6')}
          >
            6
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('*')}
          >
            *
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('1')}
          >
            1
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('2')}
          >
            2
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('3')}
          >
            3
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('-')}
          >
            -
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={() => handleNumberClick('0')}
          >
            0
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            onClick={handleClearClick}
          >
            C
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={handleEqualsClick}
          >
            =
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('+')}
          >
            +
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('^')}
          >
            ^
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('sqrt')}
          >
            √
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('log')}
          >
            log
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('ln')}
          >
            ln
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('sin')}
          >
            sin
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('cos')}
          >
            cos
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={() => handleOperatorClick('tan')}
          >
            tan
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={handleMemoryClick}
          >
            M
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={handleMemoryRecallClick}
          >
            MR
          </button>
          <button
            className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 text-white"
            onClick={handleMemoryClearClick}
          >
            MC
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;