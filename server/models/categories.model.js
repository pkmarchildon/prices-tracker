import meatsDB from './meats.schema.js';
import condimentsDB from './condiments.schema.js';
import fruitsDB from './fruits.schema.js';
import productsDB from './products.schema.js';
import vegetablesDB from './vegetables.schema.js';

export async function getItems(category) {
  if (category === 'meat') {
    return await _getItem(meatsDB);
  }

  if (category === 'condiments') {
    return await _getItem(condimentsDB);
  }
}

export async function createItem(category, newItem) {
  if (category === 'meat') {
    return await _createItem(meatsDB, newItem);
  }

  if (category === 'condiments') {
    return await _createItem(condimentsDB, newItem);
  }
}

export async function uptadeItem(category, updatedItem) {
  if (category === 'meat') {
    return await _updateItem(meatsDB, updatedItem);
  }

  if (category === 'condiments') {
    return await _updateItem(condimentsDB, updatedItem);
  }
}

export async function deleteItem(category, itemId) {
  if (category === 'meat') {
    return await _deleteItem(meatsDB, itemId);
  }

  if (category === 'condiments') {
    return await _deleteItem(condimentsDB, itemId);
  }
}

async function _getItem(categoryDB) {
  return await categoryDB.find({}, { '_id': 0, '__v': 0 });
}

async function _createItem(categoryDB, newItem) {
  return await categoryDB.create(newItem);
}

async function _updateItem(categoryDB, updatedItem) {
  return await categoryDB.findOneAndUpdate(
    { itemId: updatedItem.itemId },
    updatedItem,
    {
      upsert: false,
      new: true,
      projection: { '_id': 0, '__v': 0 }
    }
  );
}

async function _deleteItem(categoryDB, itemId) {
  return await categoryDB.findOneAndDelete({ itemId });
}
