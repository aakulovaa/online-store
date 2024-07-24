import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div className='autorize'>
          {/* <ul className='reg-log-nav'>
            <li className='log__titel'>Вход</li>
            <li className='reg__titel'>Регистрация</li>
          </ul> */}
        <label className='authoriation_label'>Логин</label>
        <input className='user_login'></input>
        <label className='authoriation_label'>Пароль</label>
        <input className='user_password'></input>
        <div>
            <input id="agree" type="checkbox" className='agree' />
            <label for="agree">Запомнить пароль</label>
        </div>

        <div>
            <button type="submit" class="send">Вход</button>
        </div>

      </div>
    )
  }
}
