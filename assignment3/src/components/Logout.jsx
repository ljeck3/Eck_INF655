import { useAuth } from '../context/AuthContext.jsx';

  function Logout() {
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout();
            alert("Logged out successfully");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    }
    return (
    <div>
            <button onClick={handleLogout}>Logout</button>
    </div>
    );
}

export default Logout;