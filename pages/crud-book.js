import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateBook from "../components/CreateBook";
import DeleteBook from "../components/DeleteBook";
import axios from "axios";

import EditBook from "../components/EditBook";

const CrudBook = () => {

  useEffect(() => {
    axios.get("http://localhost:17071/book/").then(res => {
      console.log(res.data);
      setBooks(res.data);
    })
  }, [])

  const [books, setBooks] = useState([]);
  const [showModalBook, setModalBook] = useState(false);
  const [showModalDeleteBook, setModalDeleteBook] = useState(false);
  const [showModalEditBook, setModalEditBook] = useState(false);
  const [idBook, setIdBook] = useState(null)

  const closeModalEditBook = () => {
    setModalEditBook(false);
  };

  const closeModalBook = () => {
    setModalBook(false);
  };

  const closeModalDeleteBook = () => {
    setModalDeleteBook(false);
  };

  const idModalDeleteBook = (id) => {
    console.log(id)
    setIdBook(id);
    setModalDeleteBook(true);
  };

  return (
    <div className="content">
      {showModalBook ? <CreateBook close={closeModalBook} /> : null}
      {showModalDeleteBook ? <DeleteBook idBook= {idBook} close={closeModalDeleteBook} /> : null}
      {showModalEditBook ? <EditBook close={closeModalEditBook} /> : null}
      <h2>Изменить/Создать Книгу</h2>
      <button onClick={() => setModalBook(true)} className="crud_btn-green">
        <FontAwesomeIcon icon={faPlus} size="1x" className="crud_icon" />
        Добавить Книгу
      </button>
      <input className="input" type="text" placeholder="Поиск..." />
      <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Автор</th>
          <th>Описание</th>
          <th>Действие</th>
        </tr>
      </thead>
        {books.map((item, index) => {
          return (
            <tbody key={index}>
            <tr>
            <td>
                <p>{item.id}</p>
              </td>
              <td>
        {item.original_title.text === null ? <p>{item.original_title.text}</p> : <p>Ошибка</p> }
              </td>
              <td>
                <p>{item.author.nickname}</p>
              </td>
              <td>
                <p>{item.description}</p>
              </td>
              <td>
                <div className="crud-book_buttons">
                  <button
                    className="crud_btn-green"
                    onClick={() => setModalEditBook(true)}
                  >
                    Изменить
                  </button>
                  <button
                    className="crud_btn-red"
                    onClick={() => idModalDeleteBook(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default CrudBook;
