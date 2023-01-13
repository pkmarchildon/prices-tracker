/* Components */
import Navbar from './Navbar';
import Item from './Item';

export default function ProductsPage() {
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
