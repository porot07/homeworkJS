const power = (number, step) => {
  let i = 0;
  let result = 1;
  if (step === undefined) {
    return number;
  }
  while (i < step) {
    result *= number;
    i += 1;
  }

  return result;
};

console.log(power());
