'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const router = useRouter();

  const images: any = [];

  function createImageArray(numImages: number) {
    for (let index = 1; index < numImages; index++) {
      images.push({
        id: index,
        src: `/images/random_image/img${index}.jpg`,
      });
    }
    return images;
  }

  const photos = createImageArray(12);
  function bagiArraySetengah(array: any[]) {
    const tengah = Math.ceil(array.length / 2);
    return [array.slice(0, tengah), array.slice(tengah)];
  }
  const [photos1, photos2] = bagiArraySetengah(photos);

  interface Image {
    id: number;
    src: string;
  }

  const openModal = (image: Image) => {
    if (image.src) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='mx-6 mb-32 mt-20 lg:mb-12'>
        <div className='mx-auto max-w-7xl text-center'>
          <h2 className='mb-5 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
            Contoh Gantungan Kunci
          </h2>
          <p className='font-base text-md mb-10 sm:text-xl'>
            Silahkan di Screenshot salah satu contoh ganci dan kirim ke CS kami
            untuk referensi kami membuat Gantungan Kunci anda. Anda juga bisa
            request full custom desain menggunakan foto sendiri.
          </p>

          {/* Grid Gambar */}
          <div className='grid grid-cols-2 gap-4 lg:hidden'>
            <div className='flex flex-col gap-4'>
              {photos1.map((photo, index) => (
                <div key={index} className='hover:opacity-90'>
                  <Image
                    onClick={() => openModal(photo)}
                    width={400}
                    height={400}
                    className='h-full w-full max-w-full rounded-lg object-cover'
                    src={photo.src}
                    alt=''
                  />
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              {photos2.map((photo, index) => (
                <div key={index} className='hover:opacity-90'>
                  <Image
                    onClick={() => openModal(photo)}
                    width={400}
                    height={400}
                    className='h-full w-full max-w-full rounded-lg object-cover'
                    src={photo.src}
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className='mt-10 flex flex-col gap-4 md:flex-row md:justify-center lg:hidden'>
            <Link href='/products-page'>
              <p className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700'>
                Lihat Semua Desain Yang Tersedia -&gt;
              </p>
            </Link>
            <a
              href='https://wa.me/6285117038583?text=Permisi..%20saya%20mau%20tanya%20soal%20gantungan%20kuncinya'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-green-700'
            >
              Hubungi Customer Service -&gt;
            </a>
          </div>

          <p className='mt-4 text-gray-600 lg:hidden'>
            Jangan ragu menghubungi kami, kami senang anda bertanya 😇
          </p>
        </div>
      </div>

      {/* Modal Gambar */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative mx-6 max-w-2xl rounded-lg bg-black p-1'>
            <Image
              className='max-h-full max-w-full rounded-lg'
              width={500}
              height={500}
              src={selectedImage?.src!}
              alt={`Art ${selectedImage?.id}`}
            />
            <button
              onClick={closeModal}
              className='absolute right-3 top-3 rounded-full bg-red-500 p-2 text-white transition hover:bg-red-700'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
