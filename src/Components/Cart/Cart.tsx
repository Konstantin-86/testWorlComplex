import styles from "../../Styles/cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.cart}>
        <h2>Добавленные товары</h2>
        <div className={styles.cartItem}>
          <div className={styles.productName}>товар 1</div>
          <div className={styles.productSum}>x3</div>
          <div className={styles.productPrice}>3645₽</div>
        </div>
        <div className={styles.cartItem}>
          <div className={styles.productName}>товар 11</div>
          <div className={styles.productSum}>x44</div>
          <div className={styles.productPrice}>53460₽</div>
        </div>
        <form className={styles.form}>
          <input type="tel" placeholder="Номер телефона" />
          <button>заказать</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
