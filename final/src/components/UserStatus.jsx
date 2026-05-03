import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from "react-router-dom";

  function UserStatus({username}) {
    const { logout } = useAuth()
    const handleLogout = async () => {
        if (username != undefined) {
            try {
                await logout();
                alert("Logged out successfully");
                navigate("/login");
            } catch (error) {
                console.error("Logout error:", error.message);
            }
        } else {alert("no user")};
    }

    let navigate = useNavigate()

    return (
    <div className='right-align'>
        <p>{username}</p>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
    
    );
}

export default UserStatus;