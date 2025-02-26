/* eslint-disable react/prop-types */
import { useParams  } from "react-router-dom"
import BookPage from "../pages/BookPage"
function BookCard() {
    const { id } = useParams()
    if (id) {
        return <BookPage book={{id}}></BookPage>
    }
  return (
    <div>Loading...</div>
  )
}

export default BookCard
