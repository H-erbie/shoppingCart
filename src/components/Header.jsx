import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { useGlobalContext } from '../Context'

const Header = () => {
  const {cart, total, clearCart, removeItem, increase, decrease} = useGlobalContext()
        if(cart.length === 0){
          return(
           <div className='header-container'>
             <div className="header-content">
      <h1>Your Cart</h1>
      <p>is currently empty</p>
      </div>
    </div>
    )
  }

    return (
    <div className="header-container">
      {
        cart.map((items) => {
          const {name, id, price, img, amount} = items;
          return <section key={id} className='item'>
            <article className="item-info">
            <div className="item-img"><img src={img} alt="item-img" /></div>
            <div className="item-info-info">
            <p className="item-name">{name}</p>
            <p className="item-price">{price}</p>
            <button className="btn remove" onClick={() => removeItem(id)}>remove</button>
            </div>
            </article>
            <article className="item-btns" onClick={()=>decrease(id)}>
              <button className="btn"><FaMinus/></button>
              <p className="num">{amount}</p>
              <button className="btn" onClick={()=>increase(id)}><FaPlus/></button>
            </article>
          </section>
        })
      }
      <div className="total">
        <p>Total</p>
        <p className="total-num">{total}</p>
      </div>
      <button className="btn clear" onClick={clearCart}>clear all</button>
    </div>
  )
  }


export default Header