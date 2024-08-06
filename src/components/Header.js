import React, { useState } from 'react'
import Order from "./Order";
import ShowLogIn from "./auth/ShowLogIn"
import Support from "./Support"
import Orgtex from "./Orgtex";
import PrivateOffice from "./auth/AuthDetails";

import { CgProfile } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import CompletedOrder from './CompletedOrder';
import ReturnsOrder from './ReturnsOrder';


const showOrders = (props) => {
    let summa=0

    props.orders.forEach(el => summa += Number.parseInt(el.price))
    return (
        <div>
        <div className='shop__cart__name'>Корзина</div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} onAddToBuy={props.onAddToBuy} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}Р</p>
            
        </div>
    )
}

const showComplOrders = (props) => {
    return (
        <div>
            {props.checkouts.map(el => (
                <CompletedOrder onAddToReturn={props.onAddToReturn} onDeleteFromCompl={props.onDeleteFromCompl} onAddToBuy={props.onAddToBuy} key={el.id} item={el} />
            ))}
        </div>
    )
}

const showReturns = (props) => {
    return (
        <div>
            {props.returns.map(el => (
                <ReturnsOrder onDeleteFromCompl={props.onDeleteFromCompl} onAddToReturn={props.onAddToReturn} key={el.id} item={el} />
            ))}
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

    let [ordersOpen, setOrdersOpen] = useState(false)
    let [returnsOpen, setReturnsOpen] = useState(false)

    const navigate = useNavigate();

    const handleRouteToHomePage = () => {
        setCartOpen(cartOpen = false)
        setOrgOpen(orgOpen=false)
        setUserProfileOpen(userProfileOpen=false)
        setProfileNavOpen(profileNavOpen=false)
        navigate("/")
    }

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
                    <li onClick={handleRouteToHomePage}>Главная</li>
                    <li onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-btn ${cartOpen && 'active'}`}>Корзина</li>  
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                         <button onClick={() => setOrdersOpen(ordersOpen = !ordersOpen)} className={`orders_button ${ordersOpen && 'active'}`}>Заказы</button>

                        {ordersOpen && (
                            <div className='orders'>
                                 {props.checkouts.length > 0 ? showComplOrders(props) : "Нет оформленных заказов"}
                            </div>
                        )
                        }
                        <button onClick={() => setReturnsOpen(returnsOpen = !returnsOpen)} className={`returns_button ${returnsOpen && 'active'}`}>Возвраты</button>

                        {returnsOpen && (
                            <div className='orders'>
                                 {props.returns.length > 0 ? showReturns(props) : "Нет возвратов"}
                            </div>
                        )
                        }
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
                                <PrivateOffice onClick={() => setUserProfileOpen(userProfileOpen = !userProfileOpen)} className={`user__profile__titel ${userProfileOpen && 'active'}`} />
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
