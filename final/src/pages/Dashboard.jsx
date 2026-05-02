import Header from '../components/Header'
import Greeting from '../components/Greeting'
import Logout from '../components/Logout';
import GameForm from '../components/GameForm';

function Dashboard({ user }) {
    return (
        <div className='center-align'>
            <Header />
            <hr></hr>
            <Logout />
            <Greeting username={user?.email} />
            <hr></hr>
            <GameForm user={user}/>
        </div>
    );
}

export default Dashboard;