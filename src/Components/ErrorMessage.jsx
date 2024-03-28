export default function ErrorMessage({ foodItem }) {
  return (
    <>
      {foodItem.length === 0 && <h3>I am still hungry</h3>}
    </>
  );
}