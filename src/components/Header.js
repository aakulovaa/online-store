import React from 'react'

export default function Header() {
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
                    <li>Корзина</li>  
                </ul>
            </div>
            <div>
                <span className='profile'><img src={"./img/logo.svg"}/></span>
            </div>
            
        </div>
        
        <div className='presentation'> </div>
    </header>
  )
}
