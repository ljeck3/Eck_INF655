import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from "react-router-dom";

let loginBtnText

  function UserStatus({username}) {
    if (username != undefined){
        loginBtnText = "Switch User";
    } else {
        loginBtnText = "Login";
    }

    const { logout } = useAuth()
    const handleLogout = async () => {
        if (username != undefined) {
            try {
                await logout();
                navigate("/login");
            } catch (error) {
                console.error("Logout error:", error.message);
            }
        } else {alert("No user is logged in.")};
    }

    let navigate = useNavigate()

    return (
    <div className='right-align'>
        <p>{username}</p>
        <button onClick={() => navigate("/login")}>{loginBtnText}</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
    
    );
}

export default UserStatus;