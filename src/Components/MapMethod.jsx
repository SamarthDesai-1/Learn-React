import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import CustomFoodInput from "./CustomFoodInput";
import { useState } from "react";

export default function MapMethod() {

  const [text, setText] = useState("");

  let items = ["Sabzi Bhaji", "Dal", "Green vegetables", "Milk", "Panner", "Aloo Paratha", "Veg Biryani"];

  function handleCustomFood(e) {
    const val = e.target.value;
    console.log(val);
    setText(val);
  }

  return (
    <>
      <h2>Healthy Food</h2>
      <CustomFoodInput handleCustomFood={(e) => handleCustomFood(e)}></CustomFoodInput>
      <p>{text}</p>
      <ErrorMessage foodItem={items}></ErrorMessage>
      <FoodItems foodItem={items}></FoodItems>
    </>
  );
}