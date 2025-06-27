import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [image, setImage] = React.useState(null);
  const [books, setBooks] = React.useState({
    title: "",
    description: "",
    price: null,
  });

  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", books.title);
    formData.append("description", books.description);
    formData.append("price", books.price);

    if (image) {
      formData.append("cover", image); // Add the image file
    }

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected file
  };

  console.log(books);

  return (
    <div className="form">
      <h1>Update</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
        value={books.title}
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
        value={books.description}
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
        value={books.price}
      />
      <input
        type="file"
        placeholder="cover"
        onChange={handleImageChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Update Book
      </button>
    </div>
  );
};

export default Update;
