import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

// Класс отображения элементов "Корзина"

export default class Order extends Component {
  
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} alt='item'/>
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}P</b>
            <button className='buy-icon' onClick={() => this.props.onAddToBuy(this.props.item)}>Купить</button>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
         </div>
    )
  }
 
}
