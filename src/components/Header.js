import React, { useState } from 'react'
import Order from "./Order";
import ShowLogIn from "./ShowLogIn"

import { IoCloseOutline } from "react-icons/io5";

const showOrders = (props) => {
    let summa=0
    props.orders.forEach(el => summa += Number.parseInt(el.price))
    return (
        <div>
        <div className='shop__cart__name'>Корзина</div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}Р</p>
        </div>
    )
}

const showNothing = () => {
    return (
    <div className='empty'>
    <div className='shop__cart__name'>Корзина</div>
        <h2>Товаров нет</h2>
    </div>
    )
}


export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    let [profileNavOpen, setProfileNavOpen] = useState(false)
    let [logInOpen, setLogInOpen] = useState(false)

  return (
    <header>
        <div className='header__titel'>
            <div>
                <span className='logo'>OrgTex</span>
            </div>
            <div>
                <ul className='nav'>
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-btn ${cartOpen && 'active'}`}>Корзина</li>  
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )
                }

            </div>
            <div>
                <span onClick={() => setProfileNavOpen(profileNavOpen = !profileNavOpen)} className={`profile-btn ${cartOpen && 'active'}`}><img src={"./img/logo.svg"}/></span>
            </div>

            {profileNavOpen && (
                    <div>
                        <ul className='profile-nav'>
                            <li>Личный кабинет</li>
                            <li>Поддержка</li>
                            <li onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`login-btn ${logInOpen && 'active'}`}>Вход</li>  
                        </ul>
                        {
                         logInOpen && (
                            <div className='login'>
                                <IoCloseOutline className='close-icon' onClick={() => setLogInOpen(logInOpen = false)}/>
                                <ShowLogIn />
                            </div>
                         )   
                        }
                    </div>
                )
            }
            
        </div>
        
        <div className='presentation'> </div>
    </header>
  )
}
