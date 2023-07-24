import React from "react";
export default function ProductListitem (props){
    return(
      
             <div className=" d-flex m-4 align-items-center justify-content-center " >
           
            <img src= {props.thumbnail} height={150} width ={190} alt={props.category} className="board-radius-9 me-4"/>
        
        
            <h4 className="card-title me-4">{props.title}</h4>
            <h6 className="m-2 me-4">Final Price:${props.price}</h6>
            <h6 className="m-2 me-4">Discount:{props.discountpercentage}%</h6>
            <h6 className="m-2 me-4"> Rating:{props.rating}</h6>
            
            <button className="btn btn-danger ms3 " onClick={props.incrementItem}>+</button>
             <span className="ms-3"> Quntity {props.count}</span> 
            <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
            <button className="btn btn-danger ms-3"  onClick={props.removeItem}>remove</button>
              
        </div>
        
    )
}