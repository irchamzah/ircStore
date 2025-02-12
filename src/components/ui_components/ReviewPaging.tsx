'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewPaging = ({
  path,
  reviewPageNumber,
  isNext,
}: {
  path: string;
  reviewPageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (type: string) => {
    let nextPageNumber =
      type === 'prev'
        ? Math.max(1, reviewPageNumber - 1)
        : reviewPageNumber + 1;

    const params = new URLSearchParams(searchParams.toString());
    params.set('reviewPageNumber', nextPageNumber.toString());
    router.push(`/${path}?${params.toString()}`, { scroll: false });
  };

  if (!isNext && reviewPageNumber === 1) return null;

  return (
    <div className='mx-auto max-w-7xl'>
      <div
        title='ini paging'
        className='mx-auto my-6 flex items-center justify-center sm:my-12'
      >
        <button
          onClick={() => handleNavigation('prev')}
          disabled={reviewPageNumber === 1}
          title='ini left icon'
          className='mr-10 rounded-full p-3 text-gray-500 active:bg-gray-100'
        >
          <FaChevronLeft />
        </button>
        <div title='ini page number'>Page {reviewPageNumber}</div>
        <button
          onClick={() => handleNavigation('next')}
          disabled={!isNext}
          title='ini right icon'
          className='ml-10 rounded-full p-3 text-gray-500 active:bg-gray-100'
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewPaging;
