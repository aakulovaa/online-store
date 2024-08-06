import React, { useEffect, useState } from 'react'
import ShowRegister from "./ShowRegister"
import { IoCloseOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";

import { signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

// Описание логики и внешнего вида формы входа

export default function LogIn(props) {
  let [registerOpen, setRegOpen] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [value, setValue] = useState("");

  function logIn(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    
    .then((user) => {
      console.log(user);
      setError("");
      setEmail("");
      setPassword("");
      new Notification('Вы вошли аккаунт', {
        tag: 'notif'
        });
      
    }).catch(async(error) => {
      const perm = await Notification.requestPermission()
      if (perm === 'granted') {
        new Notification("Не удалось найти ваш аккаунт", {
          tag: 'notif',
          body: 'Попробойте снова'
        })
      }
      console.log(error);
    });
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      new Notification('Вы вошли аккаунт', {
        tag: 'notif'
        });
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

    return (
      <div className='autorize'>
        
        <div className='log__titel'>Вход</div>

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
        <div>
            <input id="agree" type="checkbox" className='agree' />
            <label for="agree">Запомнить пароль</label>
        </div>
        <button className='forgot_pass'>Забыли пароль?</button>

        <div>
            <div className='login_with'>Войти с помощью: <FaGoogle className='google-icon' onClick={signInWithGoogle}/></div>
        </div>

        <div>
            <button type="submit" className='send' onClick={logIn}>Вход</button>
            {error ? <p>{error}</p> : ""}
        </div>
        <div>
            <div className='no_akk'>Нет аккаунта? <button onClick={() => setRegOpen(registerOpen = !registerOpen)} className={`reg-btn ${registerOpen && 'active'}`}>Зарегистрироваться</button></div>
        </div>
        {
          registerOpen && (
            <div className='register'>
                <IoCloseOutline className='close-icon' onClick={() => setRegOpen(registerOpen = false)}/>
                <ShowRegister onClick={() => setRegOpen(registerOpen = !registerOpen)} className={`reg__titel ${registerOpen && 'active'}`}/>
              </div>
          )   
        }

      </div>
    )

}
