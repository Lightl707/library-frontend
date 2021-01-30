import React,  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [fields, setFields] = useState([
    {
      label: "По Имени",
      placeholder: "Найти пользователя по Имени",
      input: ""
    },
    {
      label: "По Фамилии",
      placeholder: "Найти пользователя по Фамилии",
      input: ""
    },
    {
      label: "По ИИН",
      placeholder: "Найти пользователя по ИИН",
      input: ""
    },
  ]) 
  return (
    <div className="content">
      <h2>Поиск по пользователям</h2>
      <form className="search_form">
        {
          fields.map((field, index) => {
            return (
              <div className="search_field" key={index}>
                <label>{field.label}</label>
                <FontAwesomeIcon icon={faSearch} className="search_icon" />
                <input
                  className="search_input"
                  type="text"
                  placeholder={field.placeholder}
                />
              </div>
            )
          })
        }
        <button className="search_btn-black" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Admin;