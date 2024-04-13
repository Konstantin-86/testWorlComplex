import styles from "../../Styles/items.module.scss";

import monkey from "../../Images/img.png";

const Items = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.item}>
        <img src={monkey} alt="monkey" />
        <h2 className={styles.title}>название</h2>
        <p className={styles.description}>
          Описание описание описание описание описание. ауццау, описание fe
          описание. fefe.
        </p>
        <p className={styles.price}>цена: 1215₽</p>
        <button className={styles.button}>купить</button>
      </div>
    </div>
  );
};

export default Items;
