import React from "react"
import {useNavigate} from "react-router-dom"


export default function Productcard (props){
    const navigate = useNavigate();
    return(

        <div className="card m-2 cursor-pointer" style={{width:300}} role="button" onClick={()=>navigate(`/products/${props.id}`)}>
           <div className="mt-2">
            <img src= {props.thumbnail} height={150} width ={190} alt={props.category} className="board-radius-9"/>
           </div>
           <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <h6 className="m-2">Final Price:${props.price}</h6>
            <h6 className="m-2">Discount:{props.discountpercentage}%</h6>
            <h6 className="m-2"> Rating:{props.rating}</h6>
            <div className="mt-4 ">
                {props.stock > 0? <button className="btn btn-outline-success">available</button>:
                 <button className="btn btn-outline-danger">out of stock</button>}</div>


           </div>
        </div>
    )
}