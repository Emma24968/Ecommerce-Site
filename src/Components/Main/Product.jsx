import { Title } from "./Title"
import './Product.css'
import List  from "./ProductList/List"

export const Product = ()=>{
    return(
        <div className="product-cont">
            <Title />
            <div className="product-column">
                <List />
                {/* <List />
                <List />
                <List /> */}
            </div>
            
        </div>
    )
}