import { useState } from 'react';

/* Components */
import Navbar from './Navbar';
import Item from './Item';
import CreateUpdateForm from './CreateUpdateForm';

function createArrayOfItems(items) {
  let arrayOfComponents = [];

  items.forEach((itemData) => {
    arrayOfComponents.push(<Item key={itemData.name} data={itemData} />);
  });

  return arrayOfComponents;
}

export default function ProductsPage({ items }) {
  const [displayCreateUpdateForm, setDisplayCreateUpdateForm] = useState(false);

  function handleDisplayCreateUpdateForm() {
    setDisplayCreateUpdateForm(!displayCreateUpdateForm);
  }

  const componentsItems = createArrayOfItems(items);

  return (
    <div className='productsPage-container'>
      {displayCreateUpdateForm && (
        <CreateUpdateForm closeForm={handleDisplayCreateUpdateForm} />
      )}

      <Navbar displayCreateUpdateForm={handleDisplayCreateUpdateForm} />

      <div className='productsPage-itemsContainer'>
        <div className='productsPage-itemsGrid'>{componentsItems}</div>
      </div>
    </div>
  );
}
