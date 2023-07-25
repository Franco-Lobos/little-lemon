import logo from './img/Asset9.png'


const Head = ()=>{

    return(
        <head>
            <meta name="description" content="Get all your favourites meals at Little Lemon Restaurant. Open Monday to Friday, 12 to 15, in the Great Lake area."/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Get all your favourites meals at Little Lemon Restaurant. Open Monday to Friday, 12 to 15, in the Great Lake area."/>
            <meta name="og:image" content={logo}/>
        </head>
    )
}

export default Head;