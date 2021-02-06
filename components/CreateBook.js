import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CreateBook = ({ close }) => {
  const [fields, setFields] = useState([
    {
      label: "Название",
      placeholder: "Название",
      input: "",
    },
    {
      label: "Автор",
      placeholder: "Автор",
      input: "",
    },
    {
      label: "Описание",
      placeholder: "описание",
      input: "",
    }
  ]);
  return (
    <div className="book-create_modal-wrapper">
      <div className="book-create">
        <div className="modal_close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="book-create__content">
          <h2>Создание Книги</h2>
          <form className="book-create_form">
            {fields.map((field, index) => {
              return (
                <div className="book-create_field" key={index}>
                  <label>{field.label}</label>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="book-create_icon"
                  />
                  <input
                    className="book-create_input"
                    type="text"
                    placeholder={field.placeholder}
                  />
                </div>
              );
            })}
            <button className="book-create_btn-black" type="submit">
              Создать Книгу
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
