import React, { useState } from 'react'
import Order from "./Order";
import ShowLogIn from "./ShowLogIn"
import Support from "./Support"
import Orgtex from "./Orgtex";
import PrivateOffice from "./UserProfile";

import { CgProfile } from "react-icons/cg";
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
    let [logOpen, setLogOpen] = useState(false)
    let [orgOpen, setOrgOpen] = useState(false)
    let [supportOpen, setSupportOpen] = useState(false)
    let [userProfileOpen, setUserProfileOpen] = useState(false)

  return (
    <header>
        <div className='header__titel'>
            <div>
                <span onClick={() => setOrgOpen(orgOpen = !orgOpen)} className={`logo ${orgOpen && 'active'}`}>OrgTex</span>
            </div>
            {
                orgOpen && (
                <div className='org'>
                    <Orgtex onClick={() => setOrgOpen(orgOpen = !orgOpen)} className={`org ${logOpen && 'active'}`}/>
                    </div>
                )   
            }
            <div>
                <ul className='nav'>
                    <li onClick={() => setCartOpen(cartOpen = false)} className={`shop-card-btn ${cartOpen && 'active'}`}>Главная</li>
                    <li onClick={() => setCartOpen(cartOpen = false)} className={`shop-card-btn ${cartOpen && 'active'}`}>Каталог</li>
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
                <CgProfile onClick={() => setProfileNavOpen(profileNavOpen = !profileNavOpen)} className={`profile-btn ${profileNavOpen && 'active'}`} />
            </div>

            {profileNavOpen && (
                    <div>
                        <ul className='profile-nav'>
                            <li onClick={() => setUserProfileOpen(userProfileOpen = !userProfileOpen)} className={`user-profile-btn ${userProfileOpen && 'active'}`}>Личный кабинет</li>
                            <li onClick={() => setSupportOpen(supportOpen = !supportOpen)} className={`support-btn ${supportOpen && 'active'}`}>Поддержка</li>
                            <li onClick={() => setLogInOpen(logInOpen = !logInOpen)} className={`login-btn ${logInOpen && 'active'}`}>Вход</li>  
                        </ul>
                        {
                         userProfileOpen && (
                            <div className='user-profile' >
                                <IoCloseOutline className='close-icon' onClick={() => setUserProfileOpen(userProfileOpen = false)}/>
                                <PrivateOffice onClick={() => setUserProfileOpen(userProfileOpen = !userProfileOpen)} className={`user__profile__titel ${userProfileOpen && 'active'}`}/>
                             </div>
                         )
                        }
                        {
                         supportOpen && (
                            <div className='support'>
                                <IoCloseOutline className='close-icon' onClick={() => setSupportOpen(supportOpen = false)}/>
                                <Support onClick={() => setSupportOpen(supportOpen = !supportOpen)} className={`support__titel ${supportOpen && 'active'}`}/>
                             </div>
                         )   
                        }
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
        
        <div className='presentation'> 
            <img src='img/header.png' alt='orgtex'></img>
            <h2>orgtex</h2>
        </div>
    </header>
  )
}
