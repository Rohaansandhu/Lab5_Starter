// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: dashes format (123-456-7890) returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: parens format (123) 456-7890 returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: letters instead of digits returns false', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('isPhoneNumber: no digits at all returns false', () => {
  expect(isPhoneNumber('call me maybe')).toBe(false);
});

// isEmail
test('isEmail: standard email (user@example.com) returns true', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail: email with underscore in name returns true', () => {
  expect(isEmail('my_name@domain.org')).toBe(true);
});
test('isEmail: missing @ symbol returns false', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('isEmail: missing TLD returns false', () => {
  expect(isEmail('user@example')).toBe(false);
});

// isStrongPassword
// first char must be a letter, 4-15 chars total, only letters/numbers/underscore
test('isStrongPassword: valid password starting with letter (Abc_123) returns true', () => {
  expect(isStrongPassword('Abc_123')).toBe(true);
});
test('isStrongPassword: 15 character valid password returns true', () => {
  expect(isStrongPassword('Abcdefghijklmno')).toBe(true);
});
test('isStrongPassword: starts with a number returns false', () => {
  expect(isStrongPassword('1password')).toBe(false);
});
test('isStrongPassword: contains special character returns false', () => {
  expect(isStrongPassword('Pass@word1')).toBe(false);
});

// isDate
// XX/XX/YYYY where XX is 1-2 digits, YYYY is 4 digits
test('isDate: valid date (01/15/2023) returns true', () => {
  expect(isDate('01/15/2023')).toBe(true);
});
test('isDate: single digit month and day (1/5/2023) returns true', () => {
  expect(isDate('1/5/2023')).toBe(true);
});
test('isDate: dashes instead of slashes returns false', () => {
  expect(isDate('01-15-2023')).toBe(false);
});
test('isDate: 2-digit year returns false', () => {
  expect(isDate('01/15/23')).toBe(false);
});

// isHexColor
// Matches 3 or 6 hex chars, with or without leading #
test('isHexColor: valid 6-digit hex with hash (#ff0000) returns true', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});
test('isHexColor: valid 3-digit hex without hash (fff) returns true', () => {
  expect(isHexColor('fff')).toBe(true);
});
test('isHexColor: invalid characters (#gggggg) returns false', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});
test('isHexColor: 5 hex digits (not 3 or 6) returns false', () => {
  expect(isHexColor('#ff00f')).toBe(false);
});