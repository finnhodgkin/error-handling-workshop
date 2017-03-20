const { validateEmail } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateEmail', (t) => {
  t.plan(9);
  validateEmail('finnhodgkin@gmail.com', (err, res) => {
    t.equal(res, 'finnhodgkin@gmail.com', 'correct email validates');
  });
  validateEmail('finnhodgkin@gmail.ac.uk', (err, res) => {
    t.equal(res, 'finnhodgkin@gmail.ac.uk', 'correct email validates');
  });
  validateEmail('f@go.uk', (err, res) => {
    t.equal(res, 'f@go.uk', 'correct email validates');
  });
  validateEmail('fi-nh_k.f343@gmail.com', (err, res) => {
    t.equal(res, 'fi-nh_k.f343@gmail.com', 'correct email validates');
  });
  validateEmail(231, (err, res) => {
    t.ok(err, 'Non-string will return an error');
  })
  validateEmail('finnhodgkin', (err, res) => {
    t.ok(err, 'no @ symbol in email returns an error.');
  });
  validateEmail('test@test', (err, res) => {
    t.ok(err, 'Invalid domain with no \'.\'.');
  });
  validateEmail('test@te.i', (err, res) => {
    t.ok(err, 'Invalid single letter domain.');
  });
  validateEmail('test@test.ff.', (err, res) => {
    t.ok(err, 'Invalid domain ending in \'.\'.');
  });
})
