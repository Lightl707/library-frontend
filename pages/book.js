import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const Book = () => (
    <div className="content book-item">
    <div className="book-img">
      <div className="img-block">
        <img className="image" src="img/card.jpeg" />
      </div>
      <div className="wish-btn">
        <button className="btn-green_book">
        <FontAwesomeIcon icon={faPlus} size="1x" />
          Хочу прочитать
        </button>
      </div>
    </div>
    <div claclassNamess="book-info">
      <h1>Гарри Поттер и философский камень</h1>
      <div className="list">
        <div className="item">
        <FontAwesomeIcon icon={faUser} size="1x"  className="book-icon" />
          <div>
            <a className="book-header">Автор</a>
            <div className="book-description">Стивен Кинг</div>
          </div>
        </div>
        <div className="item">
        <FontAwesomeIcon icon={faUniversity} size="1x" className="book-icon"/>
          <div>
            <a className="book-header">Издательство</a>
            <div className="book-description">Аркадия, 2020 г.</div>
          </div>
        </div>
        <div className="item">
        <FontAwesomeIcon icon={faHourglassHalf} size="1x" className="book-icon" />
          <div>
            <a className="book-header">Год</a>
            <div className="book-description">2017</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Book;
