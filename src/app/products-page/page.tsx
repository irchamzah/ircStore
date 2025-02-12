import ProductCard from '@/components/all_services/ProductCard';
import Gallery from '@/components/home_components/Gallery';
import Layout from '@/components/Layout';
import ProductsPage from './ProductsPage';

export default async function HomePage() {
  return (
    <>
      <Layout>
        <ProductsPage />
      </Layout>
    </>
  );
}
