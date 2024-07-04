import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        <div className='catalog__name'>Каталог</div>
        {this.props.items.map(el => (
           <Item key={el.id} item={el} />
        ))}
      </main>
    )
  }
}

export default Items