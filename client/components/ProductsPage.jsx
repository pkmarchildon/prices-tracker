/* Components */
import Navbar from './Navbar';
import Item from './Item';

async function getData(category) {
  const res = await fetch('/api/items', {
    method: 'GET',
    body: JSON.stringify({ category: category })
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function ProductsPage() {
  //const data = await getData(category);
  //const items = await data.parseJSON(data);

  //console.log('items: ', items);

  return (
    <div className='productsPage-container'>
      <Navbar />
      <div className='productsPage-itemsContainer'>
        <div className='productsPage-itemsGrid'>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
