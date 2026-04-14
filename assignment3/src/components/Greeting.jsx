import { useState } from "react";

function Greeting(props) {
  const date = new Date();

  const [message, setMessage] = useState("Hello")

  return (
    <div>
      <h3>{message}, {props.username}</h3>
      <p>Today's date: {date.toDateString()}</p>
      <button type="button"
        onClick={() => setMessage('Howdy')}>
        Change Greeting
        </button>
    </div>
  );
}

export default Greeting;