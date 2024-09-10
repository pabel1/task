const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const numeralconvert = (input) => {
  console.log(input);
  let totalValue = 0;
  for (const symbol of romanValues) {
    if (romanValues.hasOwnProperty(symbol)) {
      totalValue += romanValues[symbol];
    } else {
      return null;
    }
    return totalValue;
  }
};

console.log(numeralconvert("VI"));
