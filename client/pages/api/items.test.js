import { isValidCategory, getItems } from './items.js';

test('Verify that the category is valid. Expecting true.', () => {
  expect(isValidCategory('products')).toBe(true);
});

test('Verify that the category is valid. Expecting false.', () => {
  expect(isValidCategory('dog')).toBe(false);
});

test('Get all items from the products category. Should return 2 objects.', () => {
  try {
    var products = getItems('products');
  } catch (error) {
    console.error(error);
  }

  expect(products.length).toBe(2);
});

test('Get all items from the products category. Should return error.', () => {
  try {
    var products = getItems('products');
  } catch (error) {
    expect(error).toStrictEqual('Category is not valid.');
  }
});
