import { useState } from 'react';

/* Components */
import Navbar from './Navbar';
import Item from './Item';
import CreateUpdateForm from './CreateUpdateForm';
import DetailUpdateView from './detail-update/DetailUpdateView';

function createArrayOfItems(items, handleClickItem) {
  let arrayOfComponents = [];

  items.forEach((itemData) => {
    arrayOfComponents.push(
      <Item
        key={itemData.name}
        data={itemData}
        handleClickItem={handleClickItem}
      />
    );
  });

  return arrayOfComponents;
}

export default function ProductsPage({ items }) {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false);
  const [itemData, setItemData] = useState([]);

  function handleDisplayMoreInfo(itemData) {
    // Set item data
    setItemData(itemData);

    setDisplayMoreInfo(!displayMoreInfo);
  }

  function closeDetailView() {
    setItemData({});
    setDisplayMoreInfo(!displayMoreInfo);
  }

  function handleCreateItem() {
    setDisplayCreateForm(!displayCreateForm);
  }

  function handleUpdateItem() {
    setDisplayUpdateForm(!displayUpdateForm);
  }

  const componentsItems = createArrayOfItems(items, handleDisplayMoreInfo);

  return (
    <div className='productsPage-container'>
      {displayCreateForm && (
        <CreateUpdateForm closeForm={handleCreateItem} itemData={{}} />
      )}

      {displayUpdateForm && (
        <CreateUpdateForm closeForm={handleUpdateItem} itemData={itemData} />
      )}

      <Navbar displayCreateForm={handleCreateItem} />

      <div className='productsPage-itemsContainer'>
        {displayMoreInfo ? (
          <DetailUpdateView
            itemData={itemData}
            handleUpdateItem={handleUpdateItem}
            closeDetailView={closeDetailView}
          />
        ) : (
          <div className='productsPage-itemsGrid'>{componentsItems}</div>
        )}
      </div>
    </div>
  );
}
