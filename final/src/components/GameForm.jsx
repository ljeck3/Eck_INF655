import { useState } from "react";
import { addGame, deleteGame, updateGame} from '../../firebase.js'

function GameForm({ user, games, interfaceLoad }) {
  const [newGame, setNewGame] = useState(""); // keeps track of new game name
  const [newPub, setNewPub] = useState(""); // keeps track of new game publisher
  const [newYear, setNewYear] = useState(""); // keeps track of new game year
  const [newDesc, setNewDesc] = useState(""); // keeps track of new game description
  const [completeStatus, setCompleteStatus] = useState("");

  const [search, setSearch] = useState(""); // for search

  //delete games
  async function interfaceDelete(id) {
    if(confirm('Are you sure you want to delete?')) {
      deleteGame(id)
      interfaceLoad();
    }
  }

  //update games
  async function interfaceUpdate(id) {
    const revisedGame = window.prompt("Edit Game Name","");
    const revisedPub = window.prompt("Edit Game Publisher","");
    const revisedYear = window.prompt("Edit Game Year","");
    const revisedDesc = window.prompt("Edit Game Description","");
    updateGame( id, { gameName: revisedGame, gamePublisher: revisedPub, gameYear: revisedYear, gameDescription: revisedDesc});
    interfaceLoad();
  }

  async function handleSubmit() {
    const date = new Date();
    if (newGame !== "") {
      await addGame({ gameName: newGame, gamePublisher: newPub, gameYear: newYear, gameDescription: newDesc }, user.uid, date.toDateString());
      interfaceLoad();//calls load again
    } else {
      alert('You must add a name and description');
    }
  }

  let searchWord = search.toLowerCase(); 
  let filteredGames = games.filter(game => game.gameName.toLowerCase().includes(searchWord));

  function sortGames() {
      setGames(prev => [...prev].sort((a, b) => a.game.localeCompare(b.game)));
    }

  return (
    <div>
      <h4>View Games</h4>
      <ul>
        {filteredGames.map((game) => <li>{ game.gameName }{': '}{game.gameDescription}
          <button onClick={() => interfaceUpdate(game.id)}>
            Edit
          </button>
          <button onClick={() => interfaceDelete(game.id)}>
            Delete
          </button>
          </li>)}
       {/*  <button onClick={() => sortGames()}>
          Sort by Name
        </button> */}
      </ul>
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
      <input
          placeholder="Search Games"
          value={search}
          onChange={e => setSearch(e.target.value)}
      />
      <br></br>
    </div>
  )
}

export default GameForm; 