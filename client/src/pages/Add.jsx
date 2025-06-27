import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [image, setImage] = React.useState(null);
  const [books, setBooks] = React.useState({
    title: "",
    description: "",
    price: null,
  });
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", books.title);
    formData.append("description", books.description);
    formData.append("price", books.price);

    formData.append("cover", image); // Add the image file

    try {
      await axios.post("http://localhost:8800/books", formData, {
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
      <h1>Add</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="file"
        placeholder="cover"
        onChange={handleImageChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Add Book
      </button>
    </div>
  );
};

export default Add;
