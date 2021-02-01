import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const main = ({ data}) => {

  return (
      <div className="content">
        <div className="categories-block">
          <div className="categories-block_item">
              <div className="value">
                <FontAwesomeIcon icon={faMoneyBillAlt} size="5x" />
              </div>
              <div className="categories-block_label">Финансы</div>
          </div>
          <div className="categories-block_item">
              <div className="value">
                <FontAwesomeIcon icon={faPaw} size="5x" />
              </div>
              <div className="categories-block_label">Животные</div>
          </div>
          <div className="categories-block_item">
              <div className="value">
                <FontAwesomeIcon icon={faGamepad} size="5x" />
              </div>
              <div className="categories-block_label">Игры</div>
          </div>
          <div className="categories-block_item">
              <div className="value">
                <FontAwesomeIcon icon={faGraduationCap} size="5x" />
              </div>
              <div className="categories-block_label">Образование</div>
          </div>
          <div className="categories-block_item">
              <div className="value">
                <FontAwesomeIcon icon={faBook} size="5x" />
              </div>
              <div className="categories-block_label">Биографии</div>
          </div>
        </div>
        <h2 className="main-header">
          <FontAwesomeIcon icon={faGamepad} size="2x" />
          <div className="cont">
            Игры
            <div className="sub">Игры, девайсы и тд</div>
          </div>
        </h2>
        <div className="main-page">
          {
            data.map((value, index) => {
             return <div className="card" key={index}>
              <div className="image">
                <img src= {value.img} alt="book" />
              </div>
            </div>
            })
          }
          {/* <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/card.jpeg" alt="book" />
            </div>
          </div> */}
        </div>
        <h2 className="main-header">
          <FontAwesomeIcon icon={faPaw} size="2x" />
          <div className="cont">
            Животные
            <div className="sub header">Книги про животных</div>
          </div>
        </h2>
        <div className="main-page">
        {
            data.map((value, index) => {
             return <div className="card" key={index}>
              <div className="image">
                <img src= {value.img} alt="book" />
              </div>
            </div>
            })
          }
        </div>
        <h2 className="main-header">
          <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />
          <div className="cont">
            Финансы
            <div className="sub header">Книги про финансы</div>
          </div>
        </h2>
        <div className="main-page">
        {
            data.map((value, index) => {
             return <div className="card" key={index}>
              <div className="image">
                <img src= {value.img} alt="book" />
              </div>
            </div>
            })
          }
        </div>
        <h2 className="main-header">
          <FontAwesomeIcon icon={faGraduationCap} size="2x" />
          <div className="cont">
            Образование
            <div className="sub header">Игры, девайсы и тд</div>
          </div>
        </h2>
        <div className="main-page">
        {
            data.map((value, index) => {
             return <div className="card" key={index}>
              <div className="image">
                <img src= {value.img} alt="book" />
              </div>
            </div>
            })
          }
        </div>
        <h2 className="main-header">
          <FontAwesomeIcon icon={faBook} size="2x" />
          <div className="cont">
            Биографии
            <div className="sub header">Книги про автобиографии</div>
          </div>
        </h2>
        <div className="main-page">
        {
            data.map((value, index) => {
             return <div className="card" key={index}>
              <div className="image">
                <img src= {value.img} alt="book" />
              </div>
            </div>
            })
          }
    
        </div>
      </div>
  );
};
export async function getServerSideProps() { 
  const res = await fetch("http://localhost:17071/book/");
  console.log(res);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default main;
