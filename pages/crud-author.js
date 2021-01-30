import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateAuthor from "../components/CreateAuthor";
import DeleteAuthor from "../components/DeleteAuthor";
import EditAuthor from "../components/EditAuthor";
import axios from "axios";


const CrudAuthor = () => {

useEffect(() => {
  axios.get("http://localhost:17071/edition/").then(res => {
    setAuthors(res.data);
  })
}, [])

  //   useEffect(async () => {
  //   await axios
  //     .get("http://localhost:17071/edition/")
  //     .then((res) => {
  //       console.log(res);
  //       setAuthors(res.data);
  //     });
  // }, []);

  const [author, setAuthors] = useState([]);
  const [showModalAuthor, setModalAuthor] = useState(false);
  const [showModalAuthorDelete, setModalAuthorDelete] = useState(false);
  const [showModalAuthorEdit, setModalAuthorEdit] = useState(false);

  const closeModalAuthorEdit = () => {
    setModalAuthorEdit(false);
  };

  const closeModalAuthorDelete = () => {
    setModalAuthorDelete(false);
  };

  const closeModalAuthor = () => {
    setModalAuthor(false);
  };

  return (
    <div className="content">
      {showModalAuthor ? <CreateAuthor close={closeModalAuthor} /> : null}
      {showModalAuthorDelete ? (
        <DeleteAuthor close={closeModalAuthorDelete} />
      ) : null}
      {showModalAuthorEdit ? <EditAuthor close={closeModalAuthorEdit} /> : null}
      <h2>Изменить/Создать Автора</h2>
      <button onClick={() => setModalAuthor(true)} className="crud_btn-green">
        <FontAwesomeIcon icon={faPlus} size="1x" className="crud_icon" />
        Добавить Автора
      </button>
      <input className="input" type="text" placeholder="Поиск..." />
      <table className="table">
        <tr>
          <th>Автор</th>
          <th>Название Книги</th>
          <th>Издание</th>
          <th>Год</th>
          <th>Действие</th>
        </tr>
        {author.map((item, index) => {
          return (
            <tr>
              <td>
                <p key={index}>{item.book.author.nickname}</p>
              </td>
              <td>
                <p key={index}>{item.book.original_Title.text}</p>
              </td>
               <td>
                <p key={index}>{item.title}</p>
              </td>
              <td>
                <p key={index}>{item.year}</p>
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
                onClick={() => setModalDeleteBook(true)}
              >
                Удалить
              </button>
            </div>
          </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CrudAuthor;
