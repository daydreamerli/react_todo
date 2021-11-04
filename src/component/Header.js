import {
    Link
  } from "react-router-dom";
import {  useLocation } from "react-router"

export const Header = ()=>{
  
const location = useLocation()
const pathname = location.pathname.split('/')[1]

    return <ul className="header">
    <li >
      <Link to="/todo" className={`link ${pathname ==='todo'?'active':''}`}>TODO</Link>
    </li>
    <li>
      <Link to="/about" className={`link ${pathname ==='about'?'active':''}`}>About</Link>
    </li>
  </ul>
}