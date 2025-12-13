import { Circle, CircleCheckBig, Star } from "lucide-react"

export const Rating =()=>{
    return(
        <div>
            <h3>Rating</h3>
            <div className="rating">
<div>
    <CircleCheckBig /> <span>5</span><Star />
   <Circle /> <span>4</span><Star />
</div>
            </div>
        </div>
    )
}