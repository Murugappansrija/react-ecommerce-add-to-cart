import React from "react"
import { Productdata } from "../data/productdata"
import Productcard from "./Productcard"


export default function Dashboard (){
    return(

        <div className="d-flex flex-wrap  justify-content-center p-3 ">
            {Productdata.map((product) => <Productcard {...product} key ={product.id}/>)}
        </div>
    )
}