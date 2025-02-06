import Cards  from "./data";
import { cardData } from "./data";


export default function RenderCards(){
    return(
        
        cardData.map((card)=>{
            return(
                <div className="text-center gap-2">
                    <img className="w-40 h-40 object-contain" src={card.image} alt="" />
                    <p>{card.title}</p>
                    <p>{card.price}</p>
                    <button>BUY NOW</button>
                </div>
            )
        })
    )
}