var n = Number(prompt('Enter n:'));

function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}

document.write(fibo(n));