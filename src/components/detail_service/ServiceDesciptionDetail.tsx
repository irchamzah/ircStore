'use client';

import { useState } from 'react';

const ServiceDescriptionDetail = ({
  description,
}: {
  description: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 xl:mx-0'>
          <div className='mb-6'>
            <div className='mb-6 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
              Deskripsi Produk
            </div>
            <div
              className={`relative overflow-hidden text-gray-600 ${isExpanded ? 'max-h-full' : 'max-h-48 sm:max-h-24'}`}
            >
              {description}
              <div
                className={`absolute bottom-0 h-20 w-full bg-white-fade ${isExpanded ? 'hidden' : ''}`}
              ></div>
            </div>
            <button
              onClick={toggleExpansion}
              className={`mt-4 font-medium active:bg-gray-100`}
            >
              {isExpanded ? '- Sembunyikan' : '+ Lihat Selengkapnya'}
            </button>
          </div>
          <hr className='mb-6' />
        </div>
      </div>
    </>
  );
};

export default ServiceDescriptionDetail;
