const removeFromArray = (arr) => {
    arr.splice(2, 1);
    return arr;
};

let array = [1, 2, 3, 4];
console.log(removeFromArray(array))

// Do not edit below this line
module.exports = removeFromArray;
