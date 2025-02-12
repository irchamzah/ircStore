import ServiceDescriptionDetail from '@/components/detail_service/ServiceDesciptionDetail';
import FeatureSection from '@/components/home_components/FeatureSection';
import Gallery from '@/components/home_components/Gallery';
import HomeHero from '@/components/home_components/HomeHero';
import HomeServices from '@/components/home_components/HomeServices';
import OrderSection from '@/components/home_components/OrderSection';
import SocialMediaSection from '@/components/home_components/SocialMediaSection';
import StepsSection from '@/components/home_components/StepsSection';
import Test from '@/components/home_components/Test';
import TestimonialsSection from '@/components/home_components/TestimonialsSection';
import YouTubeFrame from '@/components/home_components/YoutubeFrame';
import Layout from '@/components/Layout';

export default async function HomePage() {
  const description_text = (
    <div className='rounded-lg bg-white p-6 shadow-md'>
      <h2 className='text-lg font-bold text-gray-800'>
        Custom Gantungan Kunci / Keychain Acrylic UV PRINT
      </h2>

      <ul className='mt-3 space-y-2 text-gray-700'>
        <li>
          ✅ <strong>Ukuran</strong> yang dipilih merupakan ukuran keseluruhan
          dengan lobang.
        </li>
        <li>
          ✅ <strong>Minimal Pembelian</strong>: 3 pcs per desain (tidak bisa 1
          pcs per desain).
        </li>
        <li>
          ✅ <strong>Bebas Custom</strong>: Gambar dan cutting bentuk.
        </li>
      </ul>

      <h3 className='text-md mt-4 font-semibold text-gray-800'>
        ✅ Jenis Print:
      </h3>
      <ul className='mt-2 space-y-2 text-gray-700'>
        <li>
          📌 <strong>1 sisi</strong> = Akrilik 3mm (Print depan bergambar,
          belakang spot putih).
        </li>
        <li>
          📌 <strong>2 sisi, 2 akrilik</strong> = Akrilik 2mm+2mm (Depan
          belakang ada gambar, gambar di tengah).
        </li>
        <li>
          📌 <strong>2 sisi, 1 akrilik</strong> = Akrilik 3mm (Depan belakang
          ada gambar, 1 sisi glossy, 1 sisi doff).
        </li>
      </ul>

      <h3 className='text-md mt-4 font-semibold text-gray-800'>
        ✅ Spesifikasi:
      </h3>
      <ul className='mt-2 space-y-2 text-gray-700'>
        <li>
          📌 <strong>Full UV PRINT</strong>.
        </li>
        <li>
          📌 Sudah include gantungan ballchain, keyring, atau tanpa gantungan
          (harus ditulis di catatan).
        </li>
        <li>
          📌 Jika tidak diinfokan, akan dikirim dengan{' '}
          <strong>keyring (ring bulat)</strong>.
        </li>
      </ul>

      <h3 className='text-md mt-4 font-semibold text-gray-800'>
        ✅ Cara ORDER:
      </h3>
      <ol className='mt-2 list-inside list-decimal space-y-2 text-gray-700'>
        <li>Screenshot contoh ganci atau siapkan referensi foto.</li>
        <li>Hubungi Customer Service dan jelaskan desain yang diinginkan.</li>
        <li>
          Infokan pilihan gantungan (ballchain, keyring, atau tanpa gantungan).
        </li>
        <li>Kami akan memberikan total biaya.</li>
        <li>Pembeli melakukan transfer atau memilih COD.</li>
        <li>Kami memastikan desain sudah sesuai keinginan pembeli.</li>
        <li>Kami memproses pemesanan dan mengirim ke pencetak.</li>
        <li>Pencetak mencetak ganci dan mengirim ke kurir.</li>
        <li>Kurir mengirim barang ke pembeli.</li>
        <li>Pembeli membayar (jika memilih COD).</li>
      </ol>

      <h3 className='text-md mt-4 font-semibold text-gray-800'>
        ✅ Estimasi Waktu:
      </h3>
      <ul className='mt-2 space-y-2 text-gray-700'>
        <li>
          🕒 <strong>Desain</strong>: 1-2 hari.
        </li>
        <li>
          🕒 <strong>Pencetakan Ganci</strong>: 6-7 hari.
        </li>
        <li>
          🕒 <strong>Pengiriman</strong>: 2-3 hari (tergantung lokasi, bisa
          lebih lama untuk luar pulau Jawa).
        </li>
        <li>
          🕒 <strong>Total estimasi</strong>: Sekitar 9 hari dari waktu
          pemesanan.
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <Layout>
        <HomeHero />
        {/* <HomeServices /> */}
        <Gallery />
        <Test />
        <YouTubeFrame />
        <ServiceDescriptionDetail description={description_text} />
        <StepsSection />
        <FeatureSection />
        <SocialMediaSection />
        <OrderSection />
        {/* <TestimonialsSection /> */}
      </Layout>
    </>
  );
}
