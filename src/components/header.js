import Darkmode from "./darkmode";
import toad from "../images/toad-124.png";

export default function Header() {
  return (
    <div className="header-cont">
      <div className="title-image-cont">
        <h1>Toad-do App</h1>
        <img src={toad} alt="a toad"></img>
      </div>
      <Darkmode/>
    </div>
  )
}
