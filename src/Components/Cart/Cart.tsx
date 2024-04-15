import { useState, useEffect } from "react";
import { useCart } from "../../App";

import { SendCartType } from "../../Types/sendCart";

import InputMask from "react-input-mask";

import styles from "../../Styles/cart.module.scss";
import axios from "axios";

const HTTPSreq = "https://15de2ae6bb721335.mokky.dev/order";
const HTTPreq = "http://o-complex.com:1337/order";

const Cart = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validInpt, setValidInpt] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const savedPhoneNumber = localStorage.getItem("phoneNumber");

    if (savedPhoneNumber) {
      setPhoneNumber(savedPhoneNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber]);

  const sendCart = (e: React.FormEvent) => {
    e.preventDefault();
    const validatePhoneNumber = phoneNumber.replace(/\D/g, "").length;
    if (validatePhoneNumber !== 11) {
      setValidInpt(true);
      return;
    }

    const sendCart: SendCartType = {
      phone: phoneNumber.replace(/\D/g, ""),
      cart: [],
    };
    cart.forEach((item) => {
      sendCart.cart.push({
        id: item.id,
        quantity: item.quantity,
      });
    });
    axios
      .post(HTTPSreq, sendCart, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Ответ от сервера:", response.data);
      })
      .catch((error) => {
        console.error("Ошибка при отправке запроса:", error);
      });
  };
  setTimeout(() => {
    setValidInpt(false);
  }, 2000);
  return (
    <div className={styles.inner}>
      <div className={styles.cart}>
        <h2>Добавленные товары</h2>
        {cart.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <div className={styles.productName}>{item.name}</div>
            <div className={styles.productSum}>{item.quantity}</div>
            <div className={styles.productPrice}>
              {item.price * item.quantity}₽
            </div>
          </div>
        ))}

        <form className={styles.form}>
          <InputMask
            className={validInpt ? styles.inputValid : styles.input}
            mask="+7 (999) 999-99-99"
            maskChar="_"
            placeholder="+7 (___) ___-__"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button onClick={sendCart}>заказать</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
