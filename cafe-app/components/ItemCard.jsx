import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./ItemCard.module.css";

const ItemCard = ({ item, updateCart }) => {
  const [modal, toggleModal] = useState(false);
  const handleClick = () => {
    toggleModal(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    toggleModal(false);
  };

  useEffect(() => {}, [modal]);

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={item.image} className={styles.image} />
      <p>{item.name}</p>
      {modal ? (
        <Item item={item} updateCart={updateCart} handleClose={handleClose} />
      ) : null}
    </div>
  );
};

export default ItemCard;
