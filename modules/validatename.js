// @TODO: Build validateName
// String (characters allowed: letter, dash, apostrophe. Must contain at least two letters)
const validateName = (name) => {
  if (typeof name !== 'string') {
    return new Error(`${name}: not a string!`);
  }
  else if (name.length < 2) {
    return new Error(`${name}: is not long enough!`);
  }
  else if (!name.match(/^[a-z\-']*$/gim)) {
    return new Error(`${name} is not a valid name`);
  }
  else {
    return name;
  }
}
module.exports = validateName;
