import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../Styles/reviews.module.scss";

import { reviewType } from "../../Types/ReviewType";

const HTTPSreq = "https://15de2ae6bb721335.mokky.dev/reviews";
const HTTPreq = "http://o-complex.com:1337/reviews";

const Reviews = () => {
  const [reviews, setReviews] = useState<reviewType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(HTTPSreq, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setReviews(res.data))
      .then(() => setLoading(true))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className={styles.inner}>
      {loading ? (
        reviews.map((item, index) => (
          <div className={styles.item} key={index}>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))
      ) : (
        <div className={styles.loader}></div>
      )}
    </div>
  );
};

export default Reviews;
