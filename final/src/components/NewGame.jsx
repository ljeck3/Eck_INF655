import { useState } from "react";
import { addGame } from '../../firebase.js'

function NewGame({ user, interfaceLoad }) {
  const [newGame, setNewGame] = useState(""); // keeps track of new game name
  const [newPub, setNewPub] = useState(""); // keeps track of new game publisher
  const [newYear, setNewYear] = useState(""); // keeps track of new game year
  const [newDesc, setNewDesc] = useState(""); // keeps track of new game description
  const [completeStatus, setCompleteStatus] = useState("");

  async function handleSubmit() {
    const date = new Date();
    if (newGame !== "") {
      await addGame({ gameName: newGame, gamePublisher: newPub, gameYear: newYear, gameDescription: newDesc }, user.uid, date.toDateString());
      interfaceLoad();//calls load again
    } else {
      alert('You must add a name and description');
    }
  }

  return (
    <div>
      <h4>Add A New Game</h4>
      <input
          placeholder="Enter Game Name"
          value={newGame}
          onChange={e => setNewGame(e.target.value)}
      />
      <input
          placeholder="Enter Publisher"
          value={newPub}
          onChange={e => setNewPub(e.target.value)}
      />
      <input
          placeholder="Enter Publication Year"
          value={newYear}
          onChange={e => setNewYear(e.target.value)}
      />
      <input
          placeholder="Enter Game Description"
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
      />
      <h5>Add box art </h5>
      <input 
        type="file">
      </input><br></br><br></br>
      <button onClick={() => handleSubmit()}>
        Add Game
      </button>
      <br></br>
    </div>
  )
}

export default NewGame; 