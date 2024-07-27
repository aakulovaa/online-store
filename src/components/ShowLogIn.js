import React, { useState } from 'react'
import ShowRegister from "./ShowRegister"
import { IoCloseOutline } from "react-icons/io5";

export default function LogIn(props) {
  let [registerOpen, setRegOpen] = useState(false)


    return (
      <div className='autorize'>
        
        <div className='log__titel'>Вход</div>
        
        <label className='authoriation_label'>Логин</label>
        <input className='user_login'></input>
        <label className='authoriation_label'>Пароль</label>
        <input className='user_password'></input>
        <div>
            <input id="agree" type="checkbox" className='agree' />
            <label for="agree">Запомнить пароль</label>
        </div>
        <button className='forgot_pass'>Забыли пароль?</button>

        <div>
            <button type="submit" class="send">Вход</button>
        </div>
        <div>
            <div className='no_akk'>Нет аккаунта? <button class="register-btn" onClick={() => setRegOpen(registerOpen = !registerOpen)} className={`reg-btn ${registerOpen && 'active'}`}>Зарегистрироваться</button></div>
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
