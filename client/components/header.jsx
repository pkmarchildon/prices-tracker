import Image from 'next/image';
import logo from '../public/images/logo.svg';

/* Components */
import SearchBar from './search-bar';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <Image src={logo} alt='Tedski' />
      </div>

      <div className='header-searchBar-container'>
        <SearchBar />
      </div>
    </div>
  );
}
