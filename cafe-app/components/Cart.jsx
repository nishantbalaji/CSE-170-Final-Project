import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Order from "./Order";

const Cart = ({ cart, updateCart }) => {
  const [order, toggleOrder] = useState(false);

  useEffect(() => {}, [order]);

  const handleClick = () => {
    toggleOrder(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    toggleOrder(false);
  };

  return (
    <div className={styles.cart} onClick={handleClick}>
      <h1>Cart</h1>
      {order ? (
        <Order
          cart={cart}
          updateCart={updateCart}
          order={order}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};

export default Cart;
