import Header from '../components/Header'
import Register from '../components/Register';
import Login from '../components/Login';
//import Logout from '../components/Logout';

function LoginPage({ user }) {
    return (
        <div className='center-align'>
            <Header />
            <hr></hr>
            <Register />
            <Login />
        </div>
    );
}

export default LoginPage;