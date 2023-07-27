import {Link} from 'react-router-dom';

const Nav = ()=>{

    const links=[
        {name:"Home", href:"/"},
        // {name:"About", href:"./about"},
        // {name:"Menu", href:"./menu"},
        // {name:"Reservations", href:"./reservations"},
        // {name:"Order Online", href:"./order-online"},
        {name:"Book a Table", href:"/booking"}

    ]
    return(
        <nav>
            <ul className="header-links">
                {links.map(link=>
                    <li key={link.name}><Link to={link.href} className='nav-item'>{link.name}</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Nav
