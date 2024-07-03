import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div>
            <span className='contacts__name'>Контакты</span>
        </div>
        <div className='footer__titel'>
            <div>
                <span className='contacts__addresses'>Адреса магазинов</span>
            </div>
            <div>
                <span className='contacts__city'>г. Воронеж</span>
            </div>
            <div>
                <span className='contacts__phone'>+7 (435) 324-54-65</span>
            </div>
        </div>
    </footer>
  )
}
