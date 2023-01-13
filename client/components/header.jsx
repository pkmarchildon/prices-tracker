import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';

/* Components */
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <Link href='/'>
          <Image src={logo} alt='Tedski' priority='true' />
        </Link>
      </div>

      <div className='header-searchBar-container'>
        <SearchBar />
      </div>
    </div>
  );
}
