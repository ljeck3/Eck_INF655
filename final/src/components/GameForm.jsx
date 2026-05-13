import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addGame } from '../../firebase.js'

function GameForm({ user, interfaceLoad }) {
  const [newGame, setNewGame] = useState(""); // keeps track of new game name
  const [newPub, setNewPub] = useState(""); // keeps track of new game publisher
  const [newYear, setNewYear] = useState(""); // keeps track of new game year
  const [newDesc, setNewDesc] = useState(""); // keeps track of new game description
  const [completeStatus, setCompleteStatus] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    const date = new Date();
    if (newGame !== "") {
      await addGame({ gameName: newGame, gamePublisher: newPub, gameYear: newYear, gameDescription: newDesc, gameCompletion: completeStatus }, user.uid, date.toDateString());
      alert("Game added to library!")
      interfaceLoad();//calls load again
      navigate("/");

    } else {
      alert('You must add a game name.');
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

      <p>
        <label>
          <input name="group1" type="radio" value="Beat the game" checked={completeStatus === "Beat the game"} onChange={e => setCompleteStatus(e.target.value)} />
          <span>Beat the game</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" value="Beat the game 100%" checked={completeStatus === "Beat the game 100%"} onChange={e => setCompleteStatus(e.target.value)} />
          <span>Beat the game 100%</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" value="Started" checked={completeStatus === "Started"} onChange={e => setCompleteStatus(e.target.value)} />
          <span>Started</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" value="Not started" checked={completeStatus === "Not started"} onChange={e => setCompleteStatus(e.target.value)} />
          <span>Not started</span>
        </label>
      </p>




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

export default GameForm; 