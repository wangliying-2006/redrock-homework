function factorialLoop(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
 
  console.log(factorialLoop(1)); 
  console.log(factorialLoop(2)); 
  console.log(factorialLoop(3)); 
  console.log(factorialLoop(4)); 
  console.log(factorialLoop(10)); 

  function factorialRecursive(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  console.log(factorialRecursive(1)); 
  console.log(factorialRecursive(2)); 
  console.log(factorialRecursive(3)); 
  console.log(factorialRecursive(4)); 
  console.log(factorialRecursive(10)); 