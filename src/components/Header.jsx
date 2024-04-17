import { NavLink } from "react-router-dom";

const Footer = () =>{
  return(
    <header className="bg-dark text-light ps-5 py-2">
       <h1 className="display-3">Virat kholi</h1>
      <nav className="">
        <ul className="nav">
          <li className="nav-item"><NavLink to="/" className="nav-link">Overview</NavLink></li>
          <li className="nav-item"><NavLink to="/biography" className="nav-link">Biography</NavLink></li>
          <li className="nav-item"><NavLink to="/records" className="nav-link">Records</NavLink></li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Footer;
