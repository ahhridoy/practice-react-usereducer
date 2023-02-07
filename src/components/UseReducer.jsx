import React, { useState } from "react";

const Modal = ({modalText}) => {
  return (
    <>
      <p>{modalText}</p>
    </>
  );
};

const booksData = [
  { id: 1, name: "Habluder Jonno Programming" },
  { id: 2, name: "Programming er Bolod To Boss" },
  { id: 3, name: "Programming er Choddogusti" },
];

const UseReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevState) => {
      const newBook = { id: new Date().getTime().toString(), name: bookName };
      return [...prevState, newBook];
    });
    setIsModalOpen(true);
    setModalText("text added");
  };
  console.log(books);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      {isModalOpen && <Modal modalText={modalText} />}
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default UseReducer;
