import UserStatus from "./UserStatus";
function Header({username}) {
  return (
    <div>
      <p className="right-align">{username}</p>
      <UserStatus className="right-align" username={username}/>
      <h1>Game Corner</h1>
    </div>
  );
}

export default Header;