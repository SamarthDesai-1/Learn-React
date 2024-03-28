import Item from "./Item";

export default function FoodItems({ foodItem }) {

  return (
    <>
      <ul className="list-group">
        {foodItem.map(item => (
          <Item key={item} foodItem={item} handleBuyButton={() => console.log(`${item} Bought`)}></Item>
        ))}
      </ul>
    </>
  );
}
