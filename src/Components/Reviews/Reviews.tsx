import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../Styles/reviews.module.scss";

import { reviewType } from "../../Types/ReviewType";

const Reviews = () => {
  const [reviews, setReviews] = useState<reviewType[]>([]);
  useEffect(() => {
    axios
      .get("https://15de2ae6bb721335.mokky.dev/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <div className={styles.inner}>
      {reviews.map((item) => (
        <div className={styles.item} key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <p>{item.text1}</p>
          <p>{item.text2}</p>
          <p>{item.text3}</p>
          {item.text4 && <p>{item.text4}</p>}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
