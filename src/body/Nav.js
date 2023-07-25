const Nav = ()=>{

    const links=[
        {name:"Home", href:"./home"},
        {name:"About", href:"./about"},
        {name:"Menu", href:"./menu"},
        {name:"Reservations", href:"./reservations"},
        {name:"Order Online", href:"./order-online"},
        {name:"Login", href:"./login"}

    ]
    return(
        <nav>
            <ul className="header-links">
                {links.map(link=>
                    <li><a>{link.name}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default Nav
