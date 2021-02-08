import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import request from "../api/request";
import { fetchBookCreate } from "../api/book";

const CreateBook = ({ close }) => {
  
  const handleForm = (type, value) => {
    setBook({
      ...book,
      [type]: value,
    });
  };

  const handleClick = () => {
    request.post("/book/", book).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
    console.log("CHECK BOOK")
    console.log(book)
    // window.location.reload()
  }


const [book, setBook] = useState({ 
  original_title: '',
  author: '',
  description: '',
  img: null
});

  return (
    <div className="book-create_modal-wrapper">
      <div className="book-create">
        <div className="modal_close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="book-create__content">
          <h2>Создание Книги</h2>
          <form className="book-create_form">
             <div className="book-create_field">
        <label>Название книги</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon"
                  />
        <input type="text" placeholder = "Название книги" className = "book-create_input" onChange={(e) => handleForm('original_title', e.target.value)} />
      </div>
      <div className="book-create_field">
        <label>Автор</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon"
                  />
        <input type="text" placeholder = "Автор должен быть в базе данных"  className = "book-create_input" onChange={(e) => handleForm('author', e.target.value)} />
      </div>
      <div className="book-create_field">
        <label>Описание</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon" 
                  />
        <input type="text" className = "book-create_input"  placeholder = "Описание книги"   onChange={(e) => handleForm('description', e.target.value)} />
      </div>
            <button className="book-create_btn-black" onClick={() => handleClick()}>
              Создать Книгу
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
