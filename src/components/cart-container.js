import React from "react"; 
import { useGlobalContext } from "../context";
import CartItem from "./cart-item";

function CartContainer() {
    const { cart, clearCart, total } = useGlobalContext();
    
    if (cart.length === 0) {
        return (
          <section className='cart'>
            {/* cart header */}
            <header>
              <h2>Giỏ hàng</h2>
              <h4 className='empty-cart'>Giỏ hàng của bạn còn trống</h4>
            </header>
          </section>
        )
      }
      return (
        <section className='cart'>
          {/* cart header */}
          <header>
            <h2>Giỏ hàng</h2>
          </header>
          {/* cart items */}
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />
            })}
          </div>
          {/* cart footer */}
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                Tổng tiền <span>{total} VND</span>
              </h4>
            </div>
            <button className='btn buy-btn' onClick={clearCart}>
              Mua hàng
            </button>
            <button className='btn clear-btn' onClick={clearCart}>
              Hủy
            </button>
          </footer>
        </section>
      )
}

export default CartContainer;