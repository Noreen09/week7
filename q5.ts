function calculateFactorial(n: number) {
    if (n < 0) {
      console.log('Input must be a positive integer');
    }
  
    let factorial = 1;
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }