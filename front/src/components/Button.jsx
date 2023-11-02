import { useEffect, useState } from "react"
import axios from "axios"

const Button = ({props}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/todos")
           .then(response => {
               console.log(response.data)
               setProducts(response.data)
           }).catch(e => {
           console.log(e)
           })
    }, []);

    return (<div style={{display:"flex" , gap:"20px" , flexWrap:"wrap" , justifyContent:"center"}}>

            {
                products.map((item,index) => (
                        <div key={index}  style={{
                            background:"black",
                            width:"400px",
                            height:"400px",
                            padding:"10px",
                            color:"white"
                        }}>
                            <h2>{item.title}</h2>
                            <h5>{item.id}</h5>
                            <p>{item.completed ? "true" : "false"}</p>
                        </div>
                    ))
            }


   
    </div>

    )
}

export default Button