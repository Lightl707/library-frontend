import React, { useState } from 'react'
import request from '../api/request'


const Signup = ({close}) => {
  const handleForm = (type, value) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

const handleClick = () => {
    request.post("/user/", user).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
    console.log("CHECK USER")
    console.log(user)
    window.location.reload()
  }

const [user, setUser] = useState({ 
  YIN: '',
  login: '',
  email: '',
  password: '',
  fname: '',
  lname: '',
  img: null
});

const getForm = () => {
  console.log(user)
}

return (
  <div className="modal-wrapper">

  <div className="signup">
  <div className="modal_close" onClick={close}>
        <img src="/close.svg" alt="" />
    </div>
    <h2>Регистрация</h2>
    <div className="form">
      <div className="field">
        <label>ИИН</label>
        <input type="text" onChange={(e) => handleForm('YIN', e.target.value)} />
      </div>
      <div className="field">
        <label>Имя</label>
        <input type="text" onChange={(e) => handleForm('fname', e.target.value)} />
      </div>
      <div className="field">
        <label>Фамилия</label>
        <input type="text" onChange={(e) => handleForm('lname', e.target.value)} />
      </div>
      <div className="field">
        <label>Логин</label>
        <input type="text" onChange={(e) => handleForm('login', e.target.value)}/>
      </div>
      <div className="field">
        <label>Электронная почта</label>
        <input type="text" onChange={(e) => handleForm('email', e.target.value)} />
      </div>
      <div className="field">
        <label>Пароль</label>
        <input type="text" onChange={(e) => handleForm('password', e.target.value)}/>
      </div>
      <button class="btn-black" onClick={() => handleClick()}>Зарегистрироваться</button>
    </div>
  </div>
  </div>
);
}

export default Signup;
