const number = 100;
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0 || n % 10 === 3 || Math.floor(n / 10) === 3) {
    console.log("!!!");
  } else {
    console.log(n);
  }
}
