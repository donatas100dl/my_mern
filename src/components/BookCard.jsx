/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Image from "../assets/image.png"
function BookCard({ book }) {
  return (
    <Link
      className='group w-[200px] h-[300px] border-2 flex flex-col justify-between items-center border-gray-500 text-xl rounded-md relative'
      key={book.index}
      to={`/book/${book.index+1}`}
    >
      <img
        src={Image}
        alt='img'
        className='w-full h-full group-hover:blur-[2px] rounded-md'
      />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
        <button className='bg-white text-black py-2 px-4 rounded shadow-lg text-md'>
          Show More
        </button>
      </div>
    </Link>
  )
}

export default BookCard
