import database from '../../../../mock-database-fr.json';

/* Variables */
const categories = ['meat', 'vegetables', 'fruits', 'condiments', 'products'];

export default function handler(req, res) {
  try {
    var items = getItems(req.query.category);
  } catch (error) {
    return res.status(404).json({ 'error': 'Invalid category' });
  }

  return res.status(200).json({ items });
}

export function getItems(category) {
  if (!isValidCategory(category)) {
    throw new Error('Category is not valid.');
  } else {
    return database[category];
  }
}

export function isValidCategory(category) {
  return categories.includes(category);
}
