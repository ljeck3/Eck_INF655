import Header from '../components/Header'
import Login from '../components/Login';
//import Logout from '../components/Logout';

function LoginPage({ user }) {
    return (
        <div className='center-align'>
            <Header username={user?.email}/>
            <hr></hr>
            <Login />
        </div>
    );
}

export default LoginPage;