import meatsDB from './meats.schema.js';
import condimentsDB from './condiments.schema.js';
import fruitsDB from './fruits.schema.js';
import productsDB from './products.schema.js';
import vegetablesDB from './vegetables.schema.js';

export async function getItems(category) {
  if (category === 'meat') {
    return await meatsDB.find({}, { '_id': 0, '__v': 0 });
  }
}

export async function createItem(category, newItem) {
  if (category === 'meat') {
    return await meatsDB.create(newItem);
  }
}

export async function uptadeItem(category, updatedItem) {
  if (category === 'meat') {
    return await meatsDB.findOneAndUpdate(
      { itemId: updatedItem.itemId },
      updatedItem,
      {
        upsert: false,
        new: true,
        projection: { '_id': 0 }
      }
    );
  }
}

export async function deleteItem(category, itemId) {
  if (category === 'meat') {
    return await meatsDB.findOneAndDelete({ itemId });
  }
}
