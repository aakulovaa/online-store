import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div className='autorize'>
        <div className='log__titel'>Вход</div>
        <label className='authoriation_label'>Логин</label>
        <input className='user_name'></input>
        <label className='authoriation_label'>Пароль</label>
        <input className='user_password'></input>
      </div>
    )
  }
}
