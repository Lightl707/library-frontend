import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateAuthor from "../components/CreateAuthor";
import DeleteAuthor from "../components/DeleteAuthor";
import EditAuthor from "../components/EditAuthor";
import axios from "axios";


const CrudAuthor = () => {

useEffect(() => {
  axios.get("http://localhost:17071/author/").then(res => {
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
  const [idAuthor, setIdAuthor] = useState(null)


  const closeModalAuthorEdit = () => {
    setModalAuthorEdit(false);
  };

  const closeModalAuthorDelete = () => {
    setModalAuthorDelete(false);
  };

  const closeModalAuthor = () => {
    setModalAuthor(false);
  };

  const idModalDeleteAuthor = (id) => {
    console.log(id)
    setIdAuthor(id);
    setModalAuthorDelete(true);
  };

  return (
    <div className="content">
      {showModalAuthor ? <CreateAuthor close={closeModalAuthor} /> : null}
      {showModalAuthorDelete ? (
        <DeleteAuthor idAuthor = {idAuthor} close={closeModalAuthorDelete} />
      ) : null}
      {showModalAuthorEdit ? <EditAuthor close={closeModalAuthorEdit} /> : null}
      <h2>Изменить/Создать Автора</h2>
      <button onClick={() => setModalAuthor(true)} className="crud_btn-green">
        <FontAwesomeIcon icon={faPlus} size="1x" className="crud_icon" />
        Добавить Автора
      </button>
      <input className="input" type="text" placeholder="Поиск..." />
      <table className="table">
      <thead>
        <tr>
        <th>ID</th>
          <th>Псевдоним</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Год Рождения</th>
          <th>Действие</th>
        </tr>
        </thead>
        {author.map((item, index) => {
          return (
            <tbody key={index}>
            <tr>
              <td>
                <p>{item.id}</p>
              </td>
              <td>
                <p>{item.nickname}</p>
              </td>
              <td>
                <p>{item.fname.text}</p>
              </td>
               <td>
                <p>{item.lname.text}</p>
              </td>
              <td>
                <p>{item.year_of_birthday}</p>
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
                onClick={() => idModalDeleteAuthor(item.id)}
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

export default CrudAuthor;
