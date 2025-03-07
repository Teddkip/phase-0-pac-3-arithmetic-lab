function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
    }


    function preservesDecimal(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

    function increment(n) {
        return n + 1;
    }

    function decrement(n) {
        return n - 1;
    }
    function makeInt(n) {
    const parsed = parseInt(n, 10);
    return isNaN(parsed) ? NaN : parsed;
}

function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return isNaN(parsed) ? NaN : parsed;
}
function preserveDecimal(n) {
  const parsed = parseFloat(n);
  return isNaN(parsed) ? NaN : parsed;
}
