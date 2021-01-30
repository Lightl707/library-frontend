import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CreateAuthor = ({ close }) => {
  const [fields, setFields] = useState([
    {
      label: "Имя",
      placeholder: "Имя",
      input: "",
    },
    {
      label: "Фамилия",
      placeholder: "Фамилия",
      input: "",
    },
    {
      label: "Псевдоним",
      placeholder: "Псевдоним",
      input: "",
    },
    {
      label: "Год рождения",
      placeholder: "Год рождения",
      input: "",
    },
  ]);
  return (
    <div className="book-create_modal-wrapper">
      <div className="book-create">
        <div className="modal_close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="book-create__content">
          <h2>Создание Автора</h2>
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
              Создать Автора
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAuthor;
