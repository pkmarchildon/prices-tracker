import Head from 'next/head';

/* Components */
import MainPageMenu from '../components/MainPageMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tedski</title>
        <meta
          name='description'
          content='Track the prices for all your groceries, house products and all other daily products.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <MainPageMenu />
    </>
  );
}
