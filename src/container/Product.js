import React, { useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import { Productdata } from "../data/productdata"
import {useDispatch,useSelector} from "react-redux"
import {addItem} from '../redux/reducer/cart'

 

export default function Product(){
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const props = Productdata.find((element)=> element.id === parseInt(params.id))
    const[alert, setAlert]= useState(false) 

    const list = useSelector((state)=> state.cart.list)
    const element = list.find((items) =>items.id === props.id)
    const addToCart = ()=>{
        setAlert(true)
        setTimeout(() => { setAlert(false)}, 3000);
        dispatch(addItem(props))
    }
    return(

        <div className="card m-2">
            {alert&&<span className="alert alert-success">Item Added to Cart</span>}
        <div className="mt-2">
         <img src= {props.thumbnail} height={350} width ={400} alt={props.category} className="board-radius-9"/>

        </div>
        <div className="mt-3 card-body">
         <h4 className="card-title">{props.title}</h4>
         <h6 className="m-2">Final Price:${props.price}</h6>
         <h6 className="m-2">Discount:{props.discountpercentage}%</h6>
         <h6 className="m-2"> Rating:{props.rating}</h6>
         <div className="mt-4">
            {props.stock > 0 ?
            <>
            <button className="btn btn-success" onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button>
           {element?.count > 0 ? ( <button className="ms-3 btn btn-outline-warning" onClick= { ()=> navigate('/cart')} >Go to Cart</button>):
            <button className="ms-3 btn btn-outline-success" onClick= { addToCart} >Add to Cart</button>}
            </>:
             (<button className="btn btn-outline-danger">out of stock</button>)}
             </div>


        </div>
     </div>
        // <div >  product id:{params.id} {item.title} </div>
    )
}