import heroImg from '../img/Asset20.png'


const Hero = ()=>{
    

    const description =`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere ex quis sem accumsan interdum.
    `
    return(
        <section id="hero">
            <div className="hero-text">
                <h3>Little Lemmon</h3>
                <h4>Chicago</h4>
                <p>{description}</p>
                <button>Book a table</button>
            </div>
            <img src={heroImg}></img>
        </section>
    )
}

export default Hero;