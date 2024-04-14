import { useState } from "react";
import { useCart } from "../../App";
import { productType } from "../../Types/Items";
import styles from "../../Styles/main.module.scss";

const Item = ({ item }: { item: productType }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const buyItem = () => {
    if (count === 0) {
      setCount(count + 1);
      addToCart({
        id: item.id,
        name: item.title,
        quantity: count + 1,
        price: item.price,
      });
    }
  };
  const increment = () => {
    setCount(count + 1);
    addToCart({
      id: item.id,
      name: item.title,
      quantity: count + 1,
      price: item.price,
    });
  };
  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
    addToCart({
      id: item.id,
      name: item.title,
      quantity: count - 1,
      price: item.price,
    });
  };
  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image_url} alt="monkey" />
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>цена: {item.price}₽</p>
      <div
        className={count ? styles.buttonActive : styles.button}
        onClick={buyItem}
      >
        {count ? (
          <div className={styles.buttonMinus} onClick={decrement}>
            -
          </div>
        ) : null}
        {count ? (
          <div className={styles.count}>{count}</div>
        ) : (
          <div>Купить</div>
        )}
        {count ? (
          <div className={styles.buttonPlus} onClick={increment}>
            +
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
