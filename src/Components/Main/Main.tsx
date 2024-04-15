import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import styles from "../../Styles/items.module.scss";
import { productType } from "../../Types/Items";
import Item from "./Item";

const Main = () => {
  const [items, setItems] = useState<productType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    axios
      /* `http://o-complex.com:1337/products?page=${page}&page_size=20` */

      .get(`https://15de2ae6bb721335.mokky.dev/items`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        /*  setAmount(res.data.amount);
          setItems([...items, ...res.data.products]); */
        setItems(res.data[0].products);

        /* setItems(res.data.products); */
      })
      .then(() => setLoading(true))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <>
      <div className={styles.inner}>
        {loading ? (
          items.map((item, index) => <Item key={index} item={item}></Item>)
        ) : (
          <div className={styles.loader}></div>
        )}
      </div>
      <div ref={ref} className={styles.loader}></div>
    </>
  );
};

export default Main;
