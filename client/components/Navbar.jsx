import Link from 'next/link';

/* Components */
import ActiveLink from './ActiveLink';
import ActionButton from './ActionButton';

function buttonClicked() {
  console.log('click');
}

export default function Navbar() {
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
          <ActionButton text='ADD ITEM' action={buttonClicked} />
        </li>
      </ul>
    </nav>
  );
}
