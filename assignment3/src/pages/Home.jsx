import Greeting from '../components/Greeting'
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout';

function Home({ user }) {
    return (
        <div>
            <Logout />
            <Greeting username={user?.email} />
            <Register />
            <Login />
        </div>
    );
}

export default Home;