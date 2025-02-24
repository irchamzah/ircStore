'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Test = () => {
  // Membagi video ke dalam kelompok 3 elemen

  interface Image {
    id: number;
    src: string;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null | any>(null);

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
  const photos = createImageArray(12); // ubah angkanya untuk menampilkan jumlah foto yang ditampilkan
  function bagiArraySetengah(array: any[]) {
    const tengah = Math.ceil(array.length / 2);
    const bagianPertama = array.slice(0);
    return [bagianPertama];
  }
  const hasil = bagiArraySetengah(photos);
  const photos1 = hasil[0];

  const photoChunks = [];
  for (let i = 0; i < photos1.length; i += 3) {
    photoChunks.push(photos1.slice(i, i + 3));
  }

  const openModal = (image: Image) => {
    if (image.src) {
      setSelectedImage(image);
      setIsModalOpen(true);
    } else {
      console.error('Image source is undefined');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='mx-6'>
        <div className='mb-32 hidden items-center justify-center lg:flex'>
          <div className='w-full max-w-7xl'>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
              {photoChunks.map((photo, index) => (
                <div key={index} className='flex flex-col gap-4'>
                  {photo.map((photocontent, photoIndex) => (
                    <div key={photoIndex} className='hover:opacity-90'>
                      <div>
                        <Image
                          onClick={() => openModal(photocontent)}
                          width={300}
                          height={0}
                          className='h-full w-full max-w-full rounded-lg object-cover'
                          src={photocontent.src}
                          alt=''
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Tombol Aksi */}
            <div className='mt-10 flex flex-col gap-4 md:flex-row md:justify-center'>
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

            <div className='flex w-full items-center justify-center'>
              <p className='mt-4 text-gray-600'>
                Jangan ragu menghubungi kami, kami senang anda bertanya 😇
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='animated faster fadeIn fixed inset-0 z-50 flex items-center justify-center overflow-auto'>
          <div
            className='fixed inset-0 bg-black opacity-75'
            onClick={closeModal}
          />
          <div className='relative mx-6 max-w-2xl rounded-lg bg-black p-1'>
            <Image
              className='max-h-full max-w-full rounded-lg'
              width={450}
              height={0}
              src={selectedImage?.src!}
              alt={`Art ${selectedImage?.id}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
