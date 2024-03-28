import styles from "./item.module.css";

export default function Item({ foodItem, handleBuyButton }) {

  return (
    <>
      <li className={`${styles["test-item"]} list-group-item`}>
        {foodItem}
        <button className={`${styles.btn} btn btn-success`} onClick={handleBuyButton}>Buy</button>
      </li>
    </>
  );
} 