import React, { useState } from 'react'
import ShowLogIn from "./ShowLogIn"
import { IoCloseOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

// Описание логики и внешнего вида формы регистрации

export default function Register(props) {

  let [logInOpen, setLogInOpen] = useState(false)
  let [logOpen, setLogOpen] = useState(false)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");

  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault()
    if (copyPassword !== password){
      new Notification("Пароли не совпали", {
        tag: 'notif',
        body: 'Попробойте снова'
      })
      return
    }
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
      setError("");
      setEmail("");
      setCopyPassword("");
      setPassword("");
      new Notification('Аккаунт успешно создан!', {
        tag: 'notif',
        body: 'Авторизируйтесь для входа в личный кабинет'
        })
    }).catch((error) => console.log(error));
  }

    return (
      <div className='registration'>
        <form onSubmit={register}>
          <div className='reg__titel'>Регистрация</div>

          <label className='registration_label'>Имя, Фамилия</label>
          <input className='user_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          />
          <label className='registration_label'>Почта</label>
          <input className='user_mail' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          />
          <label className='registration_label'>Пароль</label>
          <input className='user_password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          />
          <label className='registration_label'>Повторите пароль</label>
          <input className='user_repeat_password' 
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type='password'
          />
          <div>
              <button type="submit" class="send" onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`send ${logInOpen && 'active'}`}>Регистрация</button>
              {error ? <p>{error}</p> : ""}
          </div>
          {
            logInOpen && (
              <div className='login'>
                  <IoCloseOutline className='close-icon' onClick={() => setLogInOpen(logInOpen = false)}/>
                  <ShowLogIn onClick={() => setLogOpen(logOpen = !logOpen)} className={`log__titel ${logOpen && 'active'}`}/>
                </div>
            )   
          }
          <div>
            <div className='already_have_akk'>Уже есть аккаунт? <button onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`log-btn ${logInOpen && 'active'}`}>Войти</button></div>
        </div>
        </form>
      </div>
    );
};
