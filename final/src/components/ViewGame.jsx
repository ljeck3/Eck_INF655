import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteGame, updateGame} from '../../firebase.js'
import placeholder from '../assets/placeholder.png'

function ViewGame({ games, interfaceLoad }) {

  const [search, setSearch] = useState(""); // for search
  
  const navigate = useNavigate();

  //delete games
  async function interfaceDelete(id) {
    if(confirm('Are you sure you want to delete?')) {
      deleteGame(id)
      alert("Game deleted.")
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
    <div className="">
      <div>
        <h4>View Games</h4>
        <button onClick={() => navigate("/add")}>Add New Game</button>
        <input
            placeholder="Search Games"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        {filteredGames.length === 0 && search && <p>No games found for "{search}".</p>}

      </div>
      <div className="container cartridge-grid">
        {filteredGames.map((game, index) =>
        <ul key={index}>
          <div className="cartridge"> 
            <li>{ game.gameName }</li>
            <hr></hr>
            <li>{ game.gamePublisher }</li>
            <hr></hr>
            <li>{ game.gameYear }</li>
            <hr></hr>
            <li>{ game.gameDescription }</li>
            <hr></hr>
            <li>{ game.gameCompletion }</li>
            <hr></hr>
            <br></br>
            <li>
              <div>
                <img src={ game.gameArt } width="120px" alt="box-art"></img>
              </div>
            </li>
            </div>
            <li>
            <br></br>
              <button onClick={() => interfaceUpdate(game.id)}>Edit</button>
              <button onClick={() => interfaceDelete(game.id)}>Delete</button>
            </li>
          
        </ul>
        
        )}
      </div>
    </div>
  )
}

export default ViewGame; 