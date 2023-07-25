import Nav from "./Nav"
import logo from './img/Asset9.png'

const Header = ()=>{
    
    return(
        <header>
            <img src={logo} alt="company logo"  className="header-logo"></img>
            <Nav></Nav>
        </header>
    )
}

export default Header
