import { Montserrat } from '@next/font/google';

/* Components */
import Header from '../components/header';

/* Stylesheets */
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/search-bar.css';
import '../styles/navbar.css';
import '../styles/action-button.css';
import '../styles/category-tile.css';
import '../styles/main-page-menu.css';
import '../styles/item.css';
import '../styles/products-page.css';
import '../styles/create-update-form.css';
import '../styles/form-components.css';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
