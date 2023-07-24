import React, { useState } from "react";
import {useSelector} from 'react-redux'
import ProductListitem from "../componant/productListitem";
// import { modifyItem, removeItem} from "../redux/reducer/cart";
import {useNavigate,useParams } from "react-router-dom"
import { Productdata } from "../data/productdata";

export default function Checkout (){
    const params = useParams()
     const list = useSelector((state)=> state.cart.list)
     const [state,setState] = useState(params.id ? 
        [{...Productdata.find(element => element.id === parseInt(params.id)),count:1}]
        :list)
    //  const dispatch = useDispatch()
     const navigate = useNavigate()

     const incrementItem = (items)=>{
    //   dispatch(modifyItem({...items, count : items.count + 1}))
    const index = state.findIndex((product) => product.id ===items.id);
      setState((state)=>[
        ...state.slice(0,index),
        {...items,count: items.count+1},
        ...state.slice(index+1),

      ])
    }

      const decrementItem = (items)=>{
         if(items.count === 1){
            removeItemfromcart(items)
         }
         else{
            // dispatch(modifyItem({...items, count : items.count-1}))
            const index = state.findIndex((product) => product.id ===items.id);
            setState((state)=>[
                ...state.slice(0,index),
                {...items,count: items.count -1},
                ...state.slice(index+1),
        
              ])

         }  
      // const element = list.find((element)=> element.id===)
     }
     const removeItemfromcart = (items)=>{
    //   dispatch(removeItem(items))}
    const index = state.findIndex((product) => product.id ===items.id);
    setState((state)=>[
      ...state.slice(0,index),
    
      ...state.slice(index+1),

    ])
}
    return(
       <>
       {state.length > 0 ? (
       <>
       {state.map((items)=>( < ProductListitem{...items} key = {items.id} 
       incrementItem= {()=>incrementItem(items)} 
        decrementItem= {()=> decrementItem(items)}
       removeItem ={()=> removeItemfromcart(items)}
      />
     
      ))}
      <button className="btn btn-success" onClick={()=>navigate('/success')} >Place Your Order</button>
      </>
      ):<h3>No Items in Cart</h3>}
       </>
    )
}