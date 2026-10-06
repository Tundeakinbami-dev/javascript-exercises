const sumAll = (num1, num2) => {
  totalSum = 0;

  if (num1 > num2) {
    let start = num2;
    num2 = num1;
    num1 = start;
  }

  if (num1 < 0 || num2 < 0) {
    return "error";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "error";
  }

  if (!Number.isInteger === num1 || !Number.isInteger === num2) {
    return "error";
  }

  for (let i = num1; i <= num2; i++) {
    totalSum += i;
  }
  return totalSum;
};

console.log(sumAll(5, 7));
// Do not edit below this line
module.exports = sumAll;
