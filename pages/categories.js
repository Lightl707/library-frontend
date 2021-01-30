import React from "react";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Categories = () => (
    <div className="content">
      <h2>Жанры</h2>
      <div className="categories-page">
        <div className="item">
          <div className="header">
          <FontAwesomeIcon icon={faBook} size="2x" />
            <div className="cat-name">Наука и математика</div>
          </div>
          <div className="list">
            <a className="item">Биология</a>
            <a className="item">Математика</a>
            <a className="item">Физика</a>
            <a className="item">Программирование</a>
          </div>
        </div>
        <div className="item">
          <div className="header">
          <FontAwesomeIcon icon={faBook} size="2x" />
            <div className="cat-name">Наука и математика</div>
          </div>
          <div className="list">
            <a className="item">Биология</a>
            <a className="item">Математика</a>
            <a className="item">Физика</a>
            <a className="item">Программирование</a>
          </div>
        </div>
        <div className="item">
          <div className="header">
          <FontAwesomeIcon icon={faBook} size="2x" />
            <div className="cat-name">Наука и математика</div>
          </div>
          <div className="list">
            <a className="item">Биология</a>
            <a className="item">Математика</a>
            <a className="item">Физика</a>
            <a className="item">Программирование</a>
          </div>
        </div>
        <div className="item">
          <div className="header">
          <FontAwesomeIcon icon={faBook} size="2x" />
            <div className="cat-name">Наука и математика</div>
          </div>
          <div className="list">
            <a className="item">Биология</a>
            <a className="item">Математика</a>
            <a className="item">Физика</a>
            <a className="item">Программирование</a>
          </div>
        </div>
        <div className="item">
          <div className="header">
          <FontAwesomeIcon icon={faBook} size="2x" />
            <div className="cat-name">Наука и математика</div>
          </div>
          <div className="list">
            <a className="item">Биология</a>
            <a className="item">Математика</a>
            <a className="item">Физика</a>
            <a className="item">Программирование</a>
          </div>
        </div>
      </div>
    </div>

)

export default Categories