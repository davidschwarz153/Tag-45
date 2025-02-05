import Cards  from "./data";
import { cardData } from "./data";


export default function RenderCards(){
    return(
        
        cardData.map((card)=>{
            return(
                <div>
                    <img className="w-20 h-20" src={card.image} alt="" />
                    <p>{card.title}</p>
                    <p>{card.price}</p>
                    <button>BUY NOW</button>
                </div>
            )
        })
    )
}