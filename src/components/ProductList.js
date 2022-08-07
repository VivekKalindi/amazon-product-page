// import React from 'react'
import React, {useState, useEffect} from 'react'

const ProductList = () => {
    const [product,setProduct]=useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                console.log("products",data)            
               setProduct(data)
    })

      }, []);
    //   console.log("product list",product)
    return (

        <div className="container">
            <div className='row gy-5'>
                {
                    product.length > 0 ? 

                    product.map(singleProduct=>
                        
                        
                        <div className ='col-md-3'> 
                        <div className ="card" style={{ width: "20rem" ,height: "35rem"}}>
                            <img src={singleProduct.image} className="card-img-top" alt={singleProduct.title} style={{ height: "20rem" }} />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{singleProduct.title.substring(0,42)}</h5>
                                <p className="card-text text-muted">{singleProduct.description.substring(0,100)}</p>
                                <span className="text-danger"> <span>&#8377; </span>{singleProduct.price}</span>
                                <a href="#" className="btn btn-primery">Details</a>
                            </div>
                        </div>
                    </div>

                        
                        )
                       
                     : (<p>Loading...</p>)
                }
           
            </div>

        </div>

    )
}

export default ProductList
