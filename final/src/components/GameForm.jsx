import { useState, useEffect} from "react";
import { db, addGame, getGames, deleteGame, updateGame} from '../../firebase.js'

function GameForm({ user }) {
  const [newGame, setNewGame] = useState(""); // keeps track of new game name
  const [newDesc, setNewDesc] = useState(""); // keeps track of new game description
  const [search, setSearch] = useState(""); // for search

  const [games, setGames] = useState([]);

  //load games
  async function interfaceLoad() {
    const data = await getGames(user.uid);
    setGames(data);
  }

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
    const revisedDesc = window.prompt("Edit Game Description","");
    updateGame( id, { gameName: revisedGame, gameDescription: revisedDesc });
    interfaceLoad();
    
  }

  //Load games on load
  useEffect(() => {
  if (!user) return;
    interfaceLoad();
  }, [user]);

  let searchWord = search.toLowerCase(); 
  let filteredGames = games.filter(game => game.gameName.toLowerCase().includes(searchWord));

  async function handleSubmit() {
    const date = new Date();
    if (newGame !== "") {
      await addGame({ gameName: newGame, gameDescription: newDesc }, user.uid, date.toDateString());
      interfaceLoad();//calls load again
    } else {
      alert('You must add a name and description');
    }
  }

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
          placeholder="Enter Game Description"
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
      />
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