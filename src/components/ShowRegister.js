import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className='registration'>
        {/* <ul className='reg-log-nav'>
            <li className='log__titel'>Вход</li>
            <li className='reg__titel'>Регистрация</li>
          </ul> */}
        <label className='name_label'>Имя</label>
        <input className='user_name'></input>
        <label className='last_name_label'>Фамилия</label>
        <input className='user_last_name'></input>
        <label className='main_label'>Почта</label>
        <input className='user_mail'></input>
        <label className='phone_label'>Телефон</label>
        <input className='user_phone'></input>
        <label className='login_label'>Логин</label>
        <input className='user_login'></input>
        <label className='password_label'>Пароль</label>
        <input className='user_password'></input>
        <label className='repeat_password_label'>Повторите пароль</label>
        <input className='user_repeat_password'></input>

        <div>
            <button type="submit" class="send">Регистрация</button>
        </div>

      </div>
    )
  }
}
