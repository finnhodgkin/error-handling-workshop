// @TODO: Build validateAge
// Integer (must be greater than 16 but less than 80)
const validateAge = (age) => {
  if (age <=16 || age >= 80) {
    return new Error(`${age}: You are too young or too old!`);
  }
  else if ((typeof age !== 'number') && (age % 1 === 0)) {
    return new Error(`${age} is not an integer`);
  }
}

module.exports = validateAge;
