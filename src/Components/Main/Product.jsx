import { Title } from "./Title"
import './Product.css'
import { List } from "./ProductList/List"

export const Product = ()=>{
    return(
        <div>
            <Title />
            <div>
                <List />
            </div>
        </div>
    )
}