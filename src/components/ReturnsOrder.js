import React, { Component } from 'react'

export default class ReturnsOrder extends Component {
  render() {
    return (
        <>
        <h2 className='shop__cart__name'>Возвраты</h2>
        <div className='item_orders'>
            <img src={"./img/" + this.props.item.img} alt='item'/>
             <h2>{this.props.item.title}</h2>
             <b>{this.props.item.price}P</b>
         </div>
        </>
    )
  }
}
