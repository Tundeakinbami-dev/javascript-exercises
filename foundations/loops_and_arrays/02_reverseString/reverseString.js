const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

console.log(reverseString("iyabo adams 123!@"));
// Do not edit below this line
module.exports = reverseString;
