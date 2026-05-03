import UserStatus from "./UserStatus";
function Header({username}) {
  return (
    <div>
      <UserStatus className="right-align" username={username}/>
      <h1>Game Corner</h1>
    </div>
  );
}

export default Header;