import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import {auth} from "../../firebase"
import Footer from "../Footer";
import ShowLogIn from "./ShowLogIn"

import { IoCloseOutline } from "react-icons/io5";

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);
    let [logInOpen, setLogInOpen] = useState(false)
    let [logOpen, setLogOpen] = useState(false)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);
    function userSignOut() {
        signOut(auth)
        .then(() => {
            new Notification('Вы вышли из аккаунта', {
                tag: 'notif',
                body: 'Авторизируйтесь для входа в личный кабинет'
                })
                
        })
        .catch((e) => console.log(e));
    }

  return (
    <div>
        {authUser ? (
            <div className='user-profile'>
                <div className='user__profile__titel'>Личный кабинет</div>
                <img alt='user_photo' className='user_photo' src={authUser.photoURL}></img>
                <div className='profile_all_labels'>
                    <label className='profile_label'>Имя, Фамилия</label>
                    <label className='user_profile_name'>{authUser.displayName}</label>
                
                    <label className='profile_label'>Почта</label>
                    <label className='user_profile_mail'>{authUser.email}</label>
                </div>
                {/* <button className='edit_button'>Редактировать</button> */}
                <button className='orders_button'>Заказы</button>
                <button className='returns_button'>Возвраты</button>
                <button onClick={userSignOut} className='logOut-btn'>Выйти</button>
                <Footer />
            </div>
        ) : (
            <div>
                <h2>Предупреждение!</h2>
                <p className='logOut__notice'>Для перехода в личный кабинет необходима авторизация</p>
                <button onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`log-btn ${logInOpen && 'active'}`}>Войти</button>
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
    </div>
  );
};
