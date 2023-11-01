import Book from "./Book";
import Wrapper from "../assets/wrappers/BookContainer";
import { useAllBookContext } from "../pages/GetAllBooks";

const BookContainer = () => {
  const { data } = useAllBookContext();
  const { books } = data;
  if (books.length === 0) {
    return (
      <Wrapper>
        <h2>No job to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='books'>
        {books.map((book) => {
          return <Book key={book._id} {...book} />;
        })}
      </div>
    </Wrapper>
  );
};
export default BookContainer;
