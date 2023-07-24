import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import ProductListitem from "../componant/productListitem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import {useNavigate} from "react-router-dom"

export default function Carts (){
     const list = useSelector((state)=> state.cart.list)
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const incrementItem = (items)=>{
      dispatch(modifyItem({...items, count : items.count + 1}))}

      const decrementItem = (items)=>{
         if(items.count === 1){
            dispatch(removeItem(items))
         }
         else{
            dispatch(modifyItem({...items, count : items.count-1}))

         }  
      // const element = list.find((element)=> element.id===)
     }
     const removeItemfromcart = (items)=>{
      dispatch(removeItem(items))}
    return(
       <>
       {list.length>0   ? (
       <>
       {list.map((items)=>( < ProductListitem{...items} key = {items.id} 
       incrementItem= {()=>incrementItem(items)} 
        decrementItem= {()=> decrementItem(items)}
       removeItem ={()=> removeItemfromcart(items)}
      />
     
      ))}
      <button className="btn btn-success" onClick={()=>navigate('/checkout')} >Go to Checkout</button>
      </>
      ):<h3>No Items in Cart</h3>}
       </>
    )
}