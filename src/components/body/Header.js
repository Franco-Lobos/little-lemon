import Nav from "./Nav"
import logo from '../../img/Asset9.png'



const Header = ()=>{

    const goHome=()=>{
        window.location.href = '/';
    }
    
    return(
        <header>
            <img src={logo} alt="company logo"  className="header-logo" onClick={goHome}></img>
            <Nav></Nav>
        </header>
    )
}

export default Header
