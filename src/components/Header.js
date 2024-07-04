import React, { useState } from 'react'
import Order from "./Order";

const showOrders = (props) => {
    let summa=0
    props.orders.forEach(el => summa += Number.parseInt(el.price))
    return (
        <div>
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
        <h2>Товаров нет</h2>
    </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

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
                <span className='profile'><img src={"./img/logo.svg"}/></span>
            </div>
            
        </div>
        
        <div className='presentation'> </div>
    </header>
  )
}
