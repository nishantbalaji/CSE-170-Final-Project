import styles from "./Order.module.css";

const Order = ({ cart, updateCart, order, handleClose }) => {
  const handleOrder = (e) => {
    cart = [];
    updateCart([...cart]);
    handleClose(e);
  };

  let date = new Date();
  date = new Date(date.getTime() + 15 * 60000);
  const showTime = date
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/^0+/, "");

  let tax = 0.0;
  let total = 0.0;

  for (let i = 0; i < cart.length; i++) {
    tax += cart[i].price * 0.0775;
    total += cart[i].price;
  }

  total = total + tax;

  tax = tax.toFixed(2);
  total = total.toFixed(2);

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.close} onClick={handleClose}>
          X
        </div>
        <h1 className={styles.heading}>Order</h1>
        <div className={styles.confirm}>Confirm Items</div>
        <div className={styles.mainbody}>
          <div className={styles.cart}>
            {cart.map((item) => (
              <div className={styles.item} key={item.name}>
                <div className={styles.imagename}>
                  <img src={item.image} className={styles.image} />
                  <div className={styles.itemName}>
                    {item.name} | {item.size}
                  </div>
                </div>
                <div className={styles.itemprice}>${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.finalcontainer}>
          <div className={styles.taxcontainer}>
            <div className={styles.tax}>Tax</div>
            <div className={styles.taxprice}>${tax}</div>
          </div>
          <div className={styles.totalcontainer}>
            <div className={styles.total}>Total</div>
            <div className={styles.totalprice}>${total}</div>
          </div>
          <div className={styles.readycontainer}>
            <div className={styles.ready}>Order Ready By:</div>
            <div className={styles.readytime}>{showTime}</div>
          </div>
        </div>
        <div className={styles.buttonContainer} onClick={handleOrder}>
          <button className={styles.button}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
