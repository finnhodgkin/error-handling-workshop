// @TODO: Build validateAge
// Integer (must be greater than 16 but less than 80)
const validateAge = (age, cb) => {
  if (age <=16 || age >= 80) {
    cb(new Error(`${age}: You are too young or too old!`));
  }
  else if (!(typeof age === 'number' || age % 1 === 0)) {
    cb(new Error(`${age} is not an integer`));
  }
  else {
    cb(null, age);
  }
}

module.exports = validateAge;
