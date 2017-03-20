// @TODO: Build validateName
// String (characters allowed: letter, dash, apostrophe. Must contain at least two letters)
const validateName = (name, cb) => {
  if (typeof name !== 'string') {
    cb(new Error(`${name}: not a string!`));
  }
  else if (name.length < 2) {
    cb(new Error(`${name}: is not long enough!`));
  }
  else if (!name.match(/^[a-z\-']*$/gi)) {
    cb(new Error(`${name} is not a valid name`));
  }
  else {
    cb(null, name);
  }
}
module.exports = validateName;
