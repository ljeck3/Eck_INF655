import Greeting from '../components/Greeting'
import Logout from '../components/Logout';

function Dashboard({ user }) {
    return (
        <div>
            <p>This is the dashboard</p>
            <Logout />
            <Greeting username={user?.email} />
        </div>
    );
}

export default Dashboard;