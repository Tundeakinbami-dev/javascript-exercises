const repeatString = (str, num) => {
  if (num < 0) {
    return "error";
  }
  let finalString = "";
  for (let i = 0; i < num; i++) {
    finalString += str;
  }
  return finalString;
};
console.log(repeatString("tunde", -1));

// Do not edit below this line
module.exports = repeatString;
