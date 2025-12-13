import { Category } from './Category'
import './Filter.css'
import { Header } from "./Header"
import Range from './Range'
import { Size } from './Size'

export const Filter = ()=>{
    return(
        <div>
          <Header /> 
          <Category /> 
          <Size />
          <Range />
        </div>
    )
}