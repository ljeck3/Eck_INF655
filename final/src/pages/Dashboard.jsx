import { useState, useEffect} from "react";
import { getGames} from '../../firebase.js'

import Header from '../components/Header'
import Greeting from '../components/Greeting'
import Logout from '../components/Logout';
import GameForm from '../components/GameForm';

function Dashboard({ user }) {
    const [games, setGames] = useState([]);
    
    //load games
    async function interfaceLoad() {
        const data = await getGames(user.uid);
        setGames(data);
      }

    //Load games on load
    useEffect(() => {
    if (!user) return;
        interfaceLoad();
    }, [user]);

    return (
        <div className='center-align'>
            <Header />
            <hr></hr>
            <Logout />
            <Greeting username={user?.email} />
            <hr></hr>
            <GameForm user={user} games={games} interfaceLoad={interfaceLoad} />
        </div>
    );
}

export default Dashboard;