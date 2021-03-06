import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import request from '../api/request'
import Link from "next/link";



const DeleteEdition = ({ close, idEdition}) => {

useEffect(() => {
  axios.get("http://159.65.204.28:17071/edition/").then(res => {
    setBooks(res.data);
  })
}, [])

const [books, setBooks] = useState([]);

const handleClick = () => {
  request.delete(`/edition/${idEdition}`).then(res => {
    console.log(res);
    this.close;
  }).catch(error => {
    console.log(error)
  })
  window.location.reload()
}

  return (
  <div className="modal-wrapper">
    <div className="modal_close" onClick={close}>
      <img src="/close.svg" alt="" />
    </div>
    <div className="book_delete">
        <FontAwesomeIcon icon={faTrash} size="4x" />
      <h2>Удаление Автора</h2>
        <p>Вы уверены в том, что хотите удалить книгу?</p>
      <div className="book_delete-answers">
      <button className="book_delete-yes" onClick={() => handleClick()}>
      <FontAwesomeIcon icon={faCheck} size="1x" className="book_delete_icon"/>
        Да
      </button>
      <button className="book_delete-no" onClick={close}>
        <FontAwesomeIcon icon={faCheck} size="1x" className="book_delete_icon" />
        Нет
      </button>
      </div>
    </div>
  </div>
);
  }

export default DeleteEdition;
