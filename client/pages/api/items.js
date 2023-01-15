import database from '../../../mock-database-fr.json';

/* Variables */
const categories = ['meat', 'vegetables', 'fruits', 'condiments', 'products'];

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      return getItems(req.body.category);
    } catch (error) {
      console.error(error);
    }
  }
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
