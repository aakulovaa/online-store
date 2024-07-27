import React, { useState } from 'react'
import ShowLogIn from "./ShowLogIn"
import { IoCloseOutline } from "react-icons/io5";

export default function Register(props) {

  let [logInOpen, setLogInOpen] = useState(false)
  let [logOpen, setLogOpen] = useState(false)


    return (
      <div className='registration'>
        <div className='reg__titel'>Регистрация</div>
        <label className='registration_label'>Имя</label>
        <input className='user_name'></input>
        <label className='registration_label'>Фамилия</label>
        <input className='user_last_name'></input>
        <label className='registration_label'>Почта</label>
        <input className='user_mail'></input>
        <label className='registration_label'>Телефон</label>
        <input className='user_phone'></input>
        <label className='registration_label'>Логин</label>
        <input className='user_login'></input>
        <label className='registration_label'>Пароль</label>
        <input className='user_password'></input>
        <label className='registration_label'>Повторите пароль</label>
        <input className='user_repeat_password'></input>

        <div>
            <button type="submit" class="send" onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`send ${logInOpen && 'active'}`}>Регистрация</button>
        </div>
        {
          logInOpen && (
            <div className='login'>
                <IoCloseOutline className='close-icon' onClick={() => setLogInOpen(logInOpen = false)}/>
                <ShowLogIn onClick={() => setLogOpen(logOpen = !logOpen)} className={`log__titel ${logOpen && 'active'}`}/>
              </div>
          )   
        }
      </div>
    )
}
