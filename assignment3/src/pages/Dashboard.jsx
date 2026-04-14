import Greeting from '../components/Greeting'
import Logout from '../components/Logout';
import TaskForm from '../components/TaskForm';

function Dashboard({ user }) {
    return (
        <div>
            <Logout />
            <Greeting username={user?.email} />
            <TaskForm user={user}/>
        </div>
    );
}

export default Dashboard;