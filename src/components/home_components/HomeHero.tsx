'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Search from './SearchService';
import SearchService from './SearchService';
import Link from 'next/link';

const HomeHero = () => {
  const images = [
    '/images/herobg1.jpg',
    '/images/herobg2.jpg',
    '/images/herobg3.jpg',
    '/images/herobg4.jpg',
    '/images/herobg5.jpg',
  ];
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='mx-0 lg:mx-6'>
      <div className='mx-auto mt-0 max-w-7xl rounded-xl lg:mt-0 lg:pb-2'>
        <div
          className='bg-cover bg-center bg-no-repeat text-white'
          style={{
            backgroundImage: `url(${images[bgImage]})`,
          }}
        >
          <div className='container mx-auto flex max-h-[500px] min-h-[300px] items-center px-4 py-24 lg:h-[500px]'>
            <div className='h-ful mx-auto flex w-full max-w-2xl flex-col items-center rounded-lg bg-gray-900 bg-opacity-70 p-10 text-center'>
              <h1 className='mb-6 text-3xl font-bold md:text-4xl'>
                Kustom Gantungan Kunci Couple Lucu Untuk Hadiah Kado Pasangan
              </h1>
              {/* <SearchService /> */}
              {/* <div className='mb-8 hidden items-center text-sm'>
                <p className=''>Popular Services:</p>
                <div className='mx-2 flex items-center gap-2'>
                  <Link
                    href='#'
                    className='rounded-full border-[1px] border-white px-4 py-1'
                  >
                    Make Up
                  </Link>
                  <Link
                    href='#'
                    className='rounded-full border-[1px] border-white px-4 py-1'
                  >
                    MC
                  </Link>
                  <Link
                    href='#'
                    className='rounded-full border-[1px] border-white px-4 py-1'
                  >
                    Dekorasi
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className='mx-auto hidden min-h-24 items-center justify-center rounded-b-xl bg-gray-100 text-gray-400 md:flex'>
          <div className='container flex items-center justify-center gap-12'>
            <span className='font-bold'>Dibuat Menggunakan:</span>
            <ul className='flex gap-12'>
              {/* <li>
                <Image
                  src={'/icons/javascript.svg'}
                  alt='logo'
                  height={48}
                  width={48}
                />
              </li>
              <li>
                <Image
                  src={'/icons/laravel.svg'}
                  alt='logo'
                  height={48}
                  width={48}
                />
              </li> */}
              <li>
                <Image
                  src={'/icons/nextjs.svg'}
                  alt='logo'
                  height={48}
                  width={48}
                />
              </li>
              {/* <li>
                  <Image
                    src={'/icons/react.svg'}
                    alt='logo'
                    height={48}
                    width={48}
                  />
                </li> */}
              <li>
                <Image
                  src={'/icons/tailwind.svg'}
                  alt='logo'
                  height={48}
                  width={48}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
