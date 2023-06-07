// Import the necessary dependencies
import  FormValidations from './FormValidations';

// Test case for a valid email
test('Valid email should return true', () => {
  const validEmail = 'test@example.com';
  const result = FormValidations(validEmail);
  expect(result).toBe(true);
});

// Test case for an invalid email
test('Invalid email should return false', () => {
  const invalidEmail = 'invalid.email';
  const result = FormValidations(invalidEmail);
  expect(result).toBe(false);
});
