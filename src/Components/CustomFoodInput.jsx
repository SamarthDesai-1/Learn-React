import styles from "./CustomFoodInput.module.css";

export default function CustomFoodInput({ handleCustomFood }) {

  return (
    <>
      <div className={`${styles.container}`}>
        <input type="text" className="form form-control" placeholder="Custom Food" onChange={handleCustomFood} />
      </div>
    </>
  );
}