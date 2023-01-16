/* Components */
import Navbar from './Navbar';
import Item from './Item';

function createArrayOfItems(items) {
  let arrayOfComponents = [];

  items.forEach((itemData) => {
    arrayOfComponents.push(<Item key={itemData.name} data={itemData} />);
  });

  return arrayOfComponents;
}

export default function ProductsPage({ items }) {
  const componentsItems = createArrayOfItems(items);

  return (
    <div className='productsPage-container'>
      <Navbar />
      <div className='productsPage-itemsContainer'>
        <div className='productsPage-itemsGrid'>{componentsItems}</div>
      </div>
    </div>
  );
}
