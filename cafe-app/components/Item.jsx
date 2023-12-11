import { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ item, updateCart, handleClose }) => {
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  const handleSmall = () => {
    setSmall(!small);
    setMedium(false);
    setLarge(false);
  };

  const handleMedium = () => {
    setSmall(false);
    setMedium(!medium);
    setLarge(false);
  };

  const handleLarge = () => {
    setSmall(false);
    setMedium(false);
    setLarge(!large);
  };
  const handleAddToCart = (e) => {
    if (small) {
      item.size = "small";
    } else if (medium) {
      item.size = "medium";
      item.price += 1.5;
    } else if (large) {
      item.size = "large";
      item.price += 2;
    }

    updateCart((cart) => [...cart, item]);

    handleClose(e);
  };

  const price = small ? item.price : medium ? item.price + 1.5 : item.price + 2;

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.close} onClick={handleClose}>
          X
        </div>
        <h1 className={styles.heading}>{item.name}</h1>
        <img src={item.image} className={styles.image} />
        <div className={styles.sizes}>
          <div
            className={small ? styles.sizeChoiceSelected : styles.sizeChoice}
            onClick={handleSmall}
          >
            S
          </div>
          <div
            className={medium ? styles.sizeChoiceSelected : styles.sizeChoice}
            onClick={handleMedium}
          >
            M
          </div>
          <div
            className={large ? styles.sizeChoiceSelected : styles.sizeChoice}
            onClick={handleLarge}
          >
            L
          </div>
        </div>
        <h3>${price.toFixed(2)}</h3>
        <p>{item.description}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={(e) => handleAddToCart(e)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
