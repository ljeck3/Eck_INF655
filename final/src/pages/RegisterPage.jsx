import Header from '../components/Header'
import Register from '../components/Register';
//import Logout from '../components/Logout';

function RegisterPage({ user }) {
    return (
        <div className='center-align'>
            <Header username={user?.email}/>
            <hr></hr>
            <Register />
        </div>
    );
}

export default RegisterPage;