import { useRouter } from 'next/router';

/* Components */
import ProductsPage from '../../components/ProductsPage';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(`category: ${category}`);

  return (
    <>
      <ProductsPage />
    </>
  );
}
