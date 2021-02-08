import React, { useState } from "react";
import request from '../api/request'


const Signin = ({ close }) => {
  const [status, setStatus] = useState(0);
  const [validLogin, setValidLogin] = useState(true);
  const [form, setForm] = useState({
    login: "",
    password: ""
  });

  const handleForm = (type, value) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const handleSubmit = async (event) => {
      request.get("/authorized", {
          auth: {
            username: form.login,
            password: form.password,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      event.preventDefault();
      // const res = await login(form);
      // if (res !== undefined) {
      //   let id = res.data;
      //   console.log(id);
      //   localStorage.clear();
      //   localStorage.setItem("id", id.id);
      //   localStorage.setItem("login", id.email);
      //   localStorage.setItem("password", form.password);
      //   setStatus(201);
      // } else {
      //   setStatus(600);
      // }
  };

  return (
    <div className="modal-wrapper">
      <div className="signin">
        <div className="modal_close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <h2>Войти в аккаунт</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className= "field">
            <label>Логин</label>
            <input
              type="text"
              value={form.login}
              onChange={(e) => {
                handleForm("login", e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Пароль</label>
            <input
              value={form.password}
              onChange={(e) => handleForm("password", e.target.value)}
            />
          </div>
          <button className="btn-black" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
