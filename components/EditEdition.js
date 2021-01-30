import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const EditEdition = ({ close }) => {
    const [fields, setFields] = useState([
        {
            label: "Название Издания",
            placeholder: "Название",
            input: "",
          },
        {
          label: "ISBN",
          placeholder: "ISBN",
          input: "",
        },
        {
          label: "UDK",
          placeholder: "UDK",
          input: "",
        },
        {
          label: "BBK",
          placeholder: "BBK",
          input: "",
        },
        {
            label: "Количество страниц",
            placeholder: "Количество страниц",
            input: "",
          },
        {
            label: "Издатель",
            placeholder: "Издатель",
            input: "",
          },
        //   {
        //     label: "Выпускные данные (В процессе)",
        //     placeholder: "Выпускные данные",
        //     input: "",
        //   },
        //   {
        //     label: "Выходные данные (В процессе)",
        //     placeholder: "Выходные данные",
        //     input: "",
        //   },
        //   {
        //     label: "Компания",
        //     placeholder: "Выходные данные",
        //     input: "",
        //   },
          {
            label: "Авторский знак",
            placeholder: "Авторский знак",
            input: "",
          },
          {
            label: "Книга",
            placeholder: "Книга",
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
          <h2>Изменить свойства издания</h2>
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
              Изменить Свойства Издания
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEdition;
