export default function DynamicComponentContent() {
  let messageNo = Math.random() * 10;
  let name = () => { 
    return "Samarth Desai"
  };

  return (
    <>
      <div className="container">
        <h1>Dynamic Content Component</h1>
        <h2>Message No : {messageNo} and instructor is : {name()}</h2>
      </div>
    </>
  );
};