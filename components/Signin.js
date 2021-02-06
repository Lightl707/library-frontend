import React, { useState } from "react";
import request from '../api/request'


const Signin = ({ close }) => {

  const handleFormAuth = (type, value) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const [user, setUser] = useState({ 
    login: '',
    password: ''
  });

  const handleClickAuth = (e) => {
    request.post("/auth/", user).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
    e.preventDefault();
  }

  return (
  <div className="modal-wrapper">
    <div className="signin">
      <div className="modal_close" onClick={close}>
        <img src="/close.svg" alt="" />
      </div>
      <h2>Войти в аккаунт</h2>
      <form className="form" onSubmit={handleClickAuth}>
        <div className="field">
          <label>Логин</label>
          <input type="text"  onChange={(e) => handleFormAuth('login', e.target.value)} />
        </div>
        <div className="field">
          <label>Пароль</label>
          <input type="password"  onChange={(e) => handleFormAuth('password', e.target.value)} />
        </div>
        <button className="btn-black" type="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
);
}

export default Signin;
