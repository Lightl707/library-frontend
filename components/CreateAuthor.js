import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import request from "../api/request";
import { fetchBookCreate } from "../api/book";

const CreateBook = ({ close }) => {
  
  const handleForm = (type, value) => {
    setAuthor({
      ...author,
      [type]: value,
    });
  };

  const handleClick = () => {
    request.post("/author/", author).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
    console.log("CHECK BOOK")
    console.log(book)
    // window.location.reload()
  }


const [author, setAuthor] = useState({ 
  fname: '',
  lname: '',
  nickname: '',
  year_of_birthday: ''
});

  return (
    <div className="book-create_modal-wrapper">
      <div className="book-create">
        <div className="modal_close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="book-create__content">
          <h2>Создание Автора</h2>
          <form className="book-create_form">
             <div className="book-create_field">
        <label>Имя</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon"
                  />
        <input type="text" placeholder = "Имя Автора" className = "book-create_input" onChange={(e) => handleForm('fname', e.target.value)} />
      </div>
      <div className="book-create_field">
        <label>Фамилия</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon"
                  />
        <input type="text" placeholder = "Фамилия Автора"  className = "book-create_input" onChange={(e) => handleForm('lname', e.target.value)} />
      </div>
      <div className="book-create_field">
        <label>Псевдоним</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon" 
                  />
        <input type="text" className = "book-create_input"  placeholder = "Псевдоним Автора"   onChange={(e) => handleForm('nickname', e.target.value)} />
      </div>
      <div className="book-create_field">
        <label>Год Рождения</label>
        <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon" 
                  />
        <input type="text" className = "book-create_input"  placeholder = "Год Рождения Автора"   onChange={(e) => handleForm('year_of_birthday', e.target.value)} />
      </div>
            <button className="book-create_btn-black" onClick={() => handleClick()}>
              Создать Автора
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
