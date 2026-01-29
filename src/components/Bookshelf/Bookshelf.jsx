import { useState } from 'react';

const Bookshelf = () => {
  // Step 2: State
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // Step 3a: Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // Step 3b: Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({
      title: '',
      author: '',
    });
  };

  // Steps 4 & 5: JSX
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;