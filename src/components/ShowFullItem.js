import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div className='full-item'>
            <div>
                <div className='item'>
                    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}P</b>
                    <div className='add__to__cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        </div>
    )
  }
}