/* Components */
import ActiveLink from './ActiveLink';
import ActionButton from './ActionButton';

export default function Navbar({ displayCreateForm }) {
  return (
    <nav className='navbar-container'>
      <ul className='navbar-list-container'>
        <li>
          <ActiveLink href='/category/meat' text='MEAT' />
        </li>

        <li>
          <ActiveLink href='/category/vegetables' text='VEGETABLES' />
        </li>

        <li>
          <ActiveLink href='/category/fruits' text='FRUITS' />
        </li>

        <li>
          <ActiveLink href='/category/condiments' text='CONDIMENTS' />
        </li>

        <li>
          <ActiveLink href='/category/products' text='PRODUCTS' />
        </li>

        <li>
          <ActionButton text='ADD ITEM' action={displayCreateForm} />
        </li>
      </ul>
    </nav>
  );
}
