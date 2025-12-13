import { Category } from './Category'
import './Filter.css'
import { Header } from "./Header"
import { Size } from './Size'

export const Filter = ()=>{
    return(
        <div>
          <Header /> 
          <Category /> 
          <Size />
        </div>
    )
}