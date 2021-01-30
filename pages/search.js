import React,  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [fields, setFields] = useState([
    {
      label: "По автору",
      placeholder: "Найти книгу по автору",
      input: ""
    },
    {
      label: "По году",
      placeholder: "Найти книгу по году выпуска",
      input: ""
    },
    {
      label: "По изданию",
      placeholder: "Найти книгу по изданию",
      input: ""
    },
    {
      label: "По названию",
      placeholder: "Найти книгу по названию",
      input: ""
    },
  ]) 
  return (
    <div className="content">
      <h2>Расширенный поиск</h2>
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

export default Search;
