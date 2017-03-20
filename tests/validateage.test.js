const { validateAge } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateAge', (t) => {
  t.plan(6);
  validateAge(1, (err, res) => {
    t.equal(err.message, '1: You are too young or too old!');
  });
  validateAge(16, (err, res) => {
    t.equal(err.message, '16: You are too young or too old!');
  });
  validateAge(17, (err, res) => {
    t.equal(res, 17);
  });
  validateAge(79, (err, res) => {
    t.equal(res, 79);
  })
  validateAge(81, (err, res) => {
    t.equal(err.message, '81: You are too young or too old!');
  });
  validateAge('test', (err, res) => {
    t.ok(err, 'string will cause an error.');
  });
})
