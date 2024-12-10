function factorialLoop(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 测试
  console.log(factorialLoop(1)); // 1
  console.log(factorialLoop(2)); // 2
  console.log(factorialLoop(3)); // 6
  console.log(factorialLoop(4)); // 24
  console.log(factorialLoop(10)); // 3628800

  function factorialRecursive(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  // 测试
  console.log(factorialRecursive(1)); // 1
  console.log(factorialRecursive(2)); // 2
  console.log(factorialRecursive(3)); // 6
  console.log(factorialRecursive(4)); // 24
  console.log(factorialRecursive(10)); // 3628800