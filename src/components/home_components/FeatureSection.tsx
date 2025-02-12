const FeatureSection = () => {
  return (
    <div className='mx-6 mb-32 mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-6 text-2xl font-bold text-gray-800'>
          Kenapa Harus Belanja di Sini?
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center rounded-lg bg-white p-6 shadow-md'>
            <span className='mr-3 text-2xl text-green-500'>✅</span>
            <p className='font-medium text-gray-700'>
              Produk 100% Original desain dari kami
            </p>
          </div>
          <div className='flex items-center rounded-lg bg-white p-6 shadow-md'>
            <span className='mr-3 text-2xl text-green-500'>✅</span>
            <p className='font-medium text-gray-700'>
              Garansi Retur jika produk tidak sesuai
            </p>
          </div>
          <div className='flex items-center rounded-lg bg-white p-6 shadow-md'>
            <span className='mr-3 text-2xl text-green-500'>✅</span>
            <p className='font-medium text-gray-700'>
              Garansi 100% Uang Kembali jika barang tidak sampai
            </p>
          </div>
          <div className='flex items-center rounded-lg bg-white p-6 shadow-md'>
            <span className='mr-3 text-2xl text-green-500'>✅</span>
            <p className='font-medium text-gray-700'>BISA COD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
