import React, { Component } from 'react'

// Класс для разббиения элементов каталога на категории

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'laser printer',
                    name: 'Лазерные принтеры'
                },
                {
                    key: 'jet printer',
                    name: 'Струйные принтеры'
                },
                {
                    key: 'laser MFP',
                    name: 'МФУ лазерные'
                },
                {
                    key: 'jet MFP',
                    name: 'МФУ струйные'
                },
                {
                    key: 'plotter',
                    name: 'Плоттеры'
                },
                {
                    key: 'scanner',
                    name: 'Сканеры'
                },
                {
                    key: '3D printer',
                    name: '3D принтеры'
                },
                {
                    key: 'raziograph',
                    name: 'Разиографы'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
