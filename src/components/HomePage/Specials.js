import SpecialItem from './SpecialItem'


import empanadaImg from '../../img/empanada.jpeg'
import ensaladaImg from '../../img/ensalada.jpeg'
import asadoImg from '../../img/asado.webp'

const Specials = ()=>{

    var datt ={
        door: 2,
        tiene: 'yes'
    }
    const specialMenus =[
        {
            id: 1,
            name: "Empanada",
            price: "5.30",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: empanadaImg
        },
        {
            id: 2,
            name: "Ensalada Capresse",
            price: "12.20",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img:ensaladaImg
        },         {
            id: 3,
            name: "Asado",
            price: "24.10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img:asadoImg
        }
    ]


    return(
        <section id="specials">
            <div className="specials-head">
                <h3>Specials</h3>
                <button>Online Menu</button>
            </div>

            <div className="special-cards-main">
            {
                specialMenus.map((it)=>
                <SpecialItem item={it} ></SpecialItem>
                )
            }
            </div>
        </section>
    )
}

export default Specials;