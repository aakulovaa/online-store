import React, { Component } from 'react'
import Footer from "./Footer";

export default class PrivateOffice extends Component {
  render() {
    return (
      <div className='user-profile'>
        <div className='user__profile__titel'>Личный кабинет</div>
        <img alt='user_photo' className='user_photo'></img>
        <div className='profile_all_labels'>
        <div className='profile_box'>
        <label className='profile_label'>Имя</label>
        <label className='user_profile_name'>Иван</label>
        </div>
        <div className='profile_box'>
        <label className='profile_label'>Фамилия</label>
        <label className='use_profile_last_name'>Иванов</label>
        </div>
        <div className='profile_box'>
        <label className='profile_label'>Почта</label>
        <label className='user_profile_mail'>inanoviv@gmail.com</label>
        </div>
        <div className='profile_box'>
        <label className='profile_label'>Телефон</label>
        <label className='user_profile_phone'>+77480380202</label>
        </div>
        </div>
        <button className='edit_button'>Редактировать</button>
        <button className='orders_button'>Заказы</button>
        <button className='returns_button'>Возвраты</button>
        <Footer />
      </div>
    )
  }
}
