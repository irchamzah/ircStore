import { ReactNode } from 'react';
import Footer from './Footer';
import MoreInfoSection from './categories_components/MoreInfoSection';
import Navbar from './Navbar';

const Layout = async ({ children }: { children: ReactNode }) => {
  // const categories = (await fetchCategories()) || [];
  const categories = [
    {
      id: 'cly1iwy8r00027qjaga07n42s',
      slug: '#',
      name: 'Gantungan Kunci',
      logo: '/icons/categories_icon/makeUp.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyq5000e7qjap26efwly',
      slug: '#',
      name: 'Belum Tersedia',
      logo: '/icons/categories_icon/praPernikahan.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
  ];
  return (
    <div>
      <Navbar mode={'block'} categories={categories} />
      <div>{children}</div>
      <MoreInfoSection categories={categories} />
      <Footer />
    </div>
  );
};

export default Layout;
