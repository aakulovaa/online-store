import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import ShowLogIn from "./components/auth/ShowLogIn";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Лазерный принтер',
          img: '1.jpg',
          desc: 'Kyocera P2040DN',
          category: 'laser printer',
          price: '33900'
        },
        {
          id:2,
          title: 'Струйный принтер',
          img: '2.jpg',
          desc: 'Canon PIXMA G1410',
          category: 'jet printer',
          price: '17900'
        },
        {
          id:3,
          title: 'МФУ лазерный',
          img: '3.jpg',
          desc: 'Pantum M6700DW',
          category: 'laser MFP',
          price: '25990'
        },
        {
          id:4,
          title: 'МФУ струйный',
          img: '4.jpg',
          desc: 'Epson L3250 (103)',
          category: 'jet MFP',
          price: '19500'
        },
        {
          id:5,
          title: 'Плоттер',
          img: '5.jpg',
          desc: 'Canon imagePROGRAF TM-255',
          category: 'plotter',
          price: '155500'
        },
        {
          id:6,
          title: 'Сканер',
          img: '6.jpg',
          desc: 'CANON CanoScan LIDE 300',
          category: 'scanner',
          price: '8300'
        },
        {
          id:7,
          title: '3D принтер',
          img: '7.jpg',
          desc: 'Creality Ender-3 neo (набор для сборки)',
          category: '3D printer',
          price: '22450'
        },
        {
          id:8,
          title: 'Разиограф',
          img: '8.jpg',
          desc: 'Цифровой дупликатор Ricoh Priport DX 2430 (300dpi), B4, 90 стр/мин, с крышкой, без мастер-пленки и чернил',
          category: 'raziograph',
          price: '298295'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    // указание возможности ваимодействия с состоянием и this
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return(
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        {this.state.showLogIn && <ShowLogIn />}
        <div className='catalog__name'>Каталог</div>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    )
  }


  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category)
  {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState(
      {
        currentItems: this.state.items.filter(el => el.category === category)
      }
    )
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
