import { CiFaceSmile } from 'react-icons/ci';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from 'react-icons/ri';

const StepsSection = () => {
  const steps = [
    {
      icon: <RiNumber1 />,
      title: 'Siapkan Referensi',
      description:
        'Screenshot contoh gantungan kunci yang diinginkan atau siapkan referensi foto.',
    },
    {
      icon: <RiNumber2 />,
      title: 'Hubungi Customer Service',
      description:
        'Berikan penjelasan mengenai desain yang diinginkan, sertakan referensi, dan pilih jenis gantungan (ballchain/keyring/tanpa gantungan).',
    },
    {
      icon: <RiNumber3 />,
      title: 'Konfirmasi & Pembayaran',
      description:
        'Kami akan memberikan total biaya. Pembeli dapat melakukan transfer atau memilih COD.',
    },
    {
      icon: <RiNumber4 />,
      title: 'Proses Pembuatan',
      description:
        'Kami memastikan desain sesuai keinginan, lalu mengirimnya ke pencetak.',
    },
    {
      icon: <RiNumber5 />,
      title: 'Produksi & Pengiriman',
      description:
        'Pencetak mencetak gantungan kunci, lalu mengirimkannya ke kurir.',
    },
    {
      icon: <CiFaceSmile />,
      title: 'Barang Diterima',
      description:
        'Kurir mengirim barang ke pembeli. Jika memilih COD, pembayaran dilakukan saat barang diterima.',
    },
  ];

  return (
    <div className='mx-6 mb-32 mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-9 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
          Tahapan Pemesanan
        </h2>
        <div className='mx-auto grid grid-cols-1 gap-8 md:grid-cols-6'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col rounded-lg bg-white lg:mx-auto'
            >
              <div className='mb-2 flex'>
                <div className='mr-3 text-xl text-blue-500'>{step.icon}</div>
                <h3 className='font-base text-xl'>{step.title}</h3>
              </div>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
