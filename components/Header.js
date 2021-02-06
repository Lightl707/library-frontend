import React, { useState } from "react";
import Link from "next/link";
import Signup from "./Signup";
import Signin from "./Signin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showModalSign, setModalSign] = useState(false);
  const [showModalSignUp, setModalSignUp] = useState(false);
  const [admin, setAdmin] = useState(true);
  const [authorized, setAuthorized] = useState(true);

  const closeModal = () => {
    setModalSign(false);
  };

  const closeAuthorized = () => {
    setAuthorized(false);
  };

  const closeModalUp = () => {
    setModalSignUp(false);
  };
  return (
    <div className="header">
      {showModalSign ? <Signin close={closeModal} /> : null}
      {showModalSignUp ? <Signup close={closeModalUp} /> : null}

      <div className="top-menu">
        {authorized ? (
          <div className="profile">
            <img
              src="img/UserIcon.png"
              alt="user"
            />
            <div className="header_p">
              <p>Arlan</p>
            </div>
            <div className="header_icon">
              <FontAwesomeIcon icon={faCaretDown} size="1x" />
            </div>
            <div className="dropdown">
              <div className="dropdown-content">
                <a href="profile">Личный Кабинет</a>
                <button href="#" onClick={() => setAuthorized(false)}>Выход</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => setModalSign(true)} className="item">
              Войти
            </button>
            <button onClick={() => setModalSignUp(true)} className="item">
              Регистрация
            </button>
          </div>
        )}
      </div>
      <div className="bot-menu ">
        <div className="logo-block">
          <Link href="/">
            <a>
              <img src="img/logo17.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="menu-items">
          <Link href="categories">
            <a className="item">Жанры</a>
          </Link>
          <Link href="popular">
            <a className="item">Популярные книги</a>
          </Link>
          <Link href="search">
            <a className="item">Поиск</a>
          </Link>

          {admin ? (
            <Link href="crud-book">
              <a className="item">Книги</a>
            </Link>
          ) : null}
          {admin ? (
            <Link href="crud-author">
              <a className="item">Авторы</a>
            </Link>
          ) : null}
          {admin ? (
            <Link href="crud-edition">
              <a className="item">Издания</a>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
