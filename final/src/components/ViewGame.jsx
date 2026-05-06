import { useState } from "react";
import { deleteGame, updateGame} from '../../firebase.js'
import placeholder from '../assets/placeholder.png'

function ViewGame({ games, interfaceLoad }) {

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

  let searchWord = search.toLowerCase(); 
  let filteredGames = games.filter(game => game.gameName.toLowerCase().includes(searchWord));

  function sortGames() {
      setGames(prev => [...prev].sort((a, b) => a.game.localeCompare(b.game)));
    }
  
  return (
    <div>
      <h4>View Games</h4>
      <input
          placeholder="Search Games"
          value={search}
          onChange={e => setSearch(e.target.value)}
      />
        {filteredGames.map((game, index) =>
        <div className="cartridge"> 
          <ul key={index}>
            <li>{ game.gameName }</li>
            <li>{ game.gamePublisher }</li>
            <li>{ game.gameYear }</li>
            <li>{ game.gameDescription }</li>
            <br></br>
            <li>
              <img src={placeholder} width="100px" alt="box-art"></img>
            </li>
            <li>
              <br></br>
              <button onClick={() => interfaceUpdate(game.id)}>Edit</button>
              <button onClick={() => interfaceDelete(game.id)}>Delete</button>
            </li>
          </ul>
        </div>
          )}
    </div>
  )
}

export default ViewGame; 