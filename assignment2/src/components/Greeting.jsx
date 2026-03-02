function Greeting(props) {
  const date = new Date();

  return (
    <div>
      <h1>Hello, {props.username}</h1>
      <p style={{ color: "blue" }}>React is really cool!</p>
      <p>Today's date: {date.toDateString()}</p>
    </div>
  );
}

export default Greeting;