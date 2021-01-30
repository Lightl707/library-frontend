import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const Book = () => (
    <div className="content book-item">
    <div class="book-img">
      <div class="img-block">
        <img class="image" src="img/card.jpeg" />
      </div>
      <div class="wish-btn">
        <button class="btn-green_book">
        <FontAwesomeIcon icon={faPlus} size="1x" />
          Хочу прочитать
        </button>
      </div>
    </div>
    <div class="book-info">
      <h1>Гарри Поттер и философский камень</h1>
      <div class="list">
        <div class="item">
        <FontAwesomeIcon icon={faUser} size="1x"  className="book-icon" />
          <div>
            <a class="book-header">Автор</a>
            <div class="book-description">Стивен Кинг</div>
          </div>
        </div>
        <div class="item">
        <FontAwesomeIcon icon={faUniversity} size="1x" className="book-icon"/>
          <div>
            <a class="book-header">Издательство</a>
            <div class="book-description">Аркадия, 2020 г.</div>
          </div>
        </div>
        <div class="item">
        <FontAwesomeIcon icon={faHourglassHalf} size="1x" className="book-icon" />
          <div>
            <a class="book-header">Год</a>
            <div class="book-description">2017</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Book;
