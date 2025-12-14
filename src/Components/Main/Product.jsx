import { Title } from "./Title"
import './Product.css'
import List  from "./ProductList/List"

export const Product = ()=>{
    return(
        <div className="product-cont">
            <Title />
            <div className="product-column">
                <List className={'list-card'}/>
                {/* <List />
                <List />
                <List /> */}
            </div>
            
        </div>
    )
}