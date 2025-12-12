import { Bell, CircleUserRound, MessageSquare } from "lucide-react"

export const SearchBar = (props) =>{
    return(
        // I added a classname using the spread method
        <div{...props}>
            <div className="search-box">
                <input type="text" placeholder="search something" />
            </div>
            <div className="User">
                <p><Bell /></p>
                <p><MessageSquare /></p>
                <p><CircleUserRound /></p>
            </div>
        </div>
    )
}