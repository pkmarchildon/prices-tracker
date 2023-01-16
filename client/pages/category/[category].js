/* Components */
import ProductsPage from '../../components/ProductsPage';

export async function getServerSideProps(context) {
  const { category } = context.query;
  const res = await fetch(
    `http://localhost:3000/api/items/get?category=${category}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { items } = await res.json();

  return { props: { items } };
}

export default function CategoryPage({ items }) {
  return (
    <>
      <ProductsPage items={items} />
    </>
  );
}
