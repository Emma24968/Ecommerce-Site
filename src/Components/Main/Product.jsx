import { Title } from "./Title"
import './Product.css'
import List  from "./ProductList/List"

export const Product = ()=>{
    return(
        <div>
            <Title />
            <div className="product-column">
                <List />
                <List />
                <List />
            </div>
            <div className="product-column">
                <List />
                <List />
                <List />
            </div>
            <div className="product-column">
                <List />
                <List />
                <List />
            </div>
        </div>
    )
}