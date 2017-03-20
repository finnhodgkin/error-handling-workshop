const { validateAge } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateAge', (t) => {
  t.plan(6);
  validateAge(17, (err, res) => {
    t.equal(res, 17, '17 validates');
  });
  validateAge(79, (err, res) => {
    t.equal(res, 79, '79 validated');
  });
  validateAge(1, (err, res) => {
    t.ok(err, '1 returns error - too young');
  });
  validateAge(16, (err, res) => {
    t.ok(err, '16 returns error - too young');
  });
  validateAge(81, (err, res) => {
    t.ok(err, '81 returns error - too old');
  });
  validateAge('test', (err, res) => {
    t.ok(err, 'string returns error.');
  });
})
