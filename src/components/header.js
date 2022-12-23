import Darkmode from "./darkmode";
import toad from "../images/toad-124.png";

export default function Header({ loggedIn, logOut, navigate}) {
  return (
    <div className="header-cont">
      <div className="title-image-cont">
        <h1>Toad-do App</h1>
        <img src={toad} alt="a toad"></img>
      </div>
      <div className="pages-color-cont">
        {loggedIn ? <button onClick={logOut}>Log Out</button> : ""}
        <button onClick={()=> navigate()}>Sign Up</button>
        <Darkmode/>
      </div>
    </div>
  )
}
