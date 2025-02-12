import { useRouter } from 'next/router';

const OrderSection = () => {
  //   const router = useRouter();

  //   const handleOrderClick = () => {
  //     router.push('/pesan'); // Ganti dengan halaman tujuan pemesanan
  //   };

  return (
    <section className='py-12'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='mb-4 text-2xl font-bold text-gray-800'>
          Pesan Sekarang!
        </h2>
        <p className='mb-6 text-gray-700'>
          Dapatkan produk custom berkualitas dengan desain eksklusif dari kami.
          Klik tombol di bawah untuk melakukan pemesanan!
        </p>
        <a
          href='https://ircstore.orderonline.id/ganci-unik?coupon=POTONGONGKIR20RB'
          target='_blank'
          className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700'
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
};

export default OrderSection;
