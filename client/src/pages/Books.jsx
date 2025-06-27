import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      // window.location.reload();
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Books</h1>
      <div className="book">
        {books.map((book) => (
          <div className="books" key={book.id}>
            {/* {book.cover && <img src={book.cover} alt="" />} */}
            {book.cover && (
              <img
                src={`http://localhost:8800${book.cover}`} // Prepend the backend URL
                alt={book.title}
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
            )}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add</Link>
      </button>
    </div>
  );
};

export default Books;
