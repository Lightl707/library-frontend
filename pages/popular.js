import React from "react";
import axios from "axios";

const Popular = ({ data }) => {
  return (
    <div className="popular">
      <div className="popular-title">
        <h1>Популярные книги</h1>
      </div>
      <div className="popular-items">
        {data.map((value, index) => {
          return (
          <div className="popular-item" key={index}>
                  <img src={value.img} alt="book" />
            <div className="popular-descr">
              <a className="name">{value.original_title.text}</a>
              <p className="popular-about">{value.description}</p>
            </div>
          </div>
          );
        })}
        <div >
          
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://159.65.204.28:17071/book/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Popular;
