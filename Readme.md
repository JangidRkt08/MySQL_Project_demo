# 📚 Book Management Web App

A full-stack book management application built with **React.js**, **Node.js**, **Express**, and **MySQL**. Users can perform CRUD operations (Create, Read, Update, Delete) on books, along with image uploads using `multer`. The project includes a backend REST API and a client-side React interface.

---

## 🚀 Features

- View all books with details
- Add a new book with image, title, description, and price
- Update book details and image
- Delete books
- Responsive, minimal interface using React
- File/image upload using `multer`

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MySQL
- Multer (for file upload)
- CORS middleware

---



## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

- Node.js and npm
- MySQL
- Git

---

### 2️⃣ MySQL Setup

Create a database named `books` and run the following SQL:

```sql
CREATE DATABASE books;

USE books;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  price FLOAT,
  cover VARCHAR(255)
);


3️⃣ Backend Setup

cd backend
npm install
node index.js
✅ Backend will run on http://localhost:8800

Make sure the uploads/ folder exists in the backend/ directory for storing uploaded images.

Edit MySQL credentials in index.js if needed:

const db = mysql.createConnection({
  host: "localhost",
  user: "****",
  password: "******",
  database: "books",
});


4️⃣ Frontend Setup

cd client
npm install
npm start
React frontend runs at http://localhost:3000


## 🖼️ App Preview

- **Home Page**: Lists all books with image, title, description, and price.
- **Add Page**: Fill in a form and upload an image to add a book.
- **Update Page**: Update existing book info and optionally replace the image.

---

## 📦 API Endpoints

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/books`       | Get all books           |
| POST   | `/books`       | Add a new book          |
| DELETE | `/books/:id`   | Delete a book by ID     |
| PUT    | `/books/:id`   | Update a book by ID     |

---

## 📌 Notes

- Images are stored locally in the `/uploads` folder.
- Images can be accessed using:  

