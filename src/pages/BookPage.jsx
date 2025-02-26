/* eslint-disable react/prop-types */
import Image from '../assets/image.png'
function BookCard({ book }) {
  return (
    <div className='w-full mt-10 h-min flex flex-col justify-center items-center'>
      <h2 className='text-2xl'>Book #{book.id}</h2>
      <div
        className='group w-fit h-min  border-2 flex flex-col justify-between items-center border-gray-500 text-xl rounded-md relative'
        key={book.index}
      >
        <img
          src={Image}
          alt='img'
          className='w-full h-full rounded-md'
        />
      </div>
      <a
          className='group mt-10 flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 vtransition-colors hover:bg-gray-200  focus:ring-3 focus:outline-hidden transition-all'
        >
          <span className='font-medium transition-colors group-hover:text-black'>
            {' '}
            Start Reading{' '}
          </span>

          <span className='shrink-0 rounded-full border border-gray-700 p-2'>
            <svg
              className='size-5 rtl:rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M16 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </span>
        </a>
    </div>
  )
}

export default BookCard
