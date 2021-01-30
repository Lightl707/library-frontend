import React from "react";
import Link from "next/link";

const Footer = () => (
  <div className="footer">
    <div className="block">
      <h4 className="block-header">О нас</h4>
      <div className="block-list">
        <Link href="#">
          <a className="item">Карта Сайта</a>
        </Link>
        <Link href="#">
          <a href="#" className="item">
            Контакты
          </a>
        </Link>
      </div>
    </div>
    <div className="block">
      <h4 className="block-header">Поиск</h4>
      <div className="block-list">
        <Link href="popular">
          <a className="item">Популярные книги</a>
        </Link>
        <Link href="categories">
          <a href="#" className="item">
          Жанры
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
