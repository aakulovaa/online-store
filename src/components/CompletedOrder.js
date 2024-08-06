import React, { Component } from 'react'

export default class CompletedOrder extends Component {
  render() {
    return (
    <>
    <h2 className='shop__cart__name'>Заказы</h2>
    <div className='item_orders'>
        <img src={"./img/" + this.props.item.img} alt='item'/>
         <h2>{this.props.item.title}</h2>

         <b>{this.props.item.price}P</b>
         <button className='buy-icon' onClick={() => this.props.onAddToReturn(this.props.item)}>Вернуть</button>
     </div>
    </>
    )
  }
}
