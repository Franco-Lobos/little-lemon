import heroImg from '../../img/Asset20.png'

import { Link } from 'react-router-dom'

const Hero = ()=>{

    const description =`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere ex quis sem accumsan interdum.
    `
    return(
        <section id="hero">
            <div className="hero-text">
                <h3>Little Lemmon</h3>
                {/* <div>{true}</div> */}
                <h4>Chicago</h4>
                <p>{description}</p>
                <Link to={'/booking'} className='nav-ite'><button>Book a table</button></Link>
            </div>
            <img src={heroImg}></img>
        </section>
    )
}

export default Hero;