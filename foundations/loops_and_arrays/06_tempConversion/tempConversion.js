const convertToCelsius = (farenheit) => {
  let f = (farenheit - 32) * (5 / 9);
  return Number(f.toFixed(1));
};

const convertToFahrenheit = (celcius) => {
  let c = celcius * 1.8 + 32;
  return Number(c.toFixed(1));
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
