import React from "react"
import Header from "../componant/header"
import { Route,Routes} from "react-router-dom"
import Dashboard from "../componant/Dashboard"
import Product from "./Product"
import Carts from "./Carts"
import Checkout from "./Checkout"
import Success from "./Success"




export default function Home (){
    return(

        <div>
             <Header/>
             <Routes>
                <Route  path="/" element = {<Dashboard />}/>
                <Route path="/products/:id" element = {<Product/>}/>
                <Route  path="/cart" element = {<Carts />}/>
                <Route path="/checkout/">
                    <Route path="" element ={<Checkout/>}/>
                    <Route path=":id" element ={<Checkout/>}/>
                
                </Route>
                <Route  path="/success" element = {<Success />}/>


             </Routes>
             
        </div>
    )
}