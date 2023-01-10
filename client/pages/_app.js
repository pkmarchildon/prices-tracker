import localFont from '@next/font/local';

/* Components */
import Header from '../components/header';

/* Stylesheets */
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/search-bar.css';

const myFont = localFont({
  src: '../public/fonts/proximanova-regular.otf',
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
