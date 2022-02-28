import './product.css'
import ProductItem from "./product-item";
import {useEffect, useState} from "react";

import a from "../../../assets/plants/cactus/C001.png"
import b from "../../../assets/plants/cactus/C002.png"
import c from "../../../assets/plants/cactus/C003.png"
import d from "../../../assets/plants/cactus/C004.png"
import e from "../../../assets/plants/cactus/C005.png"
import f from "../../../assets/plants/cactus/C006.png"
import g from "../../../assets/plants/cactus/C007.png"
import h from "../../../assets/plants/cactus/C008.png"
import i from "../../../assets/plants/cactus/C009.png"
import j from "../../../assets/plants/cactus/C010.png"
import k from "../../../assets/plants/cactus/C011.png"
import l from "../../../assets/plants/cactus/C012.png"

import a1 from "../../../assets/plants/Succelents/S001.jpg"
import b1 from "../../../assets/plants/Succelents/S002.jpg"
import c1 from "../../../assets/plants/Succelents/S003.jpg"
import d1 from "../../../assets/plants/Succelents/S004.jpg"
import e1 from "../../../assets/plants/Succelents/S005.jpg"
import f1 from "../../../assets/plants/Succelents/S006.jpg"
import g1 from "../../../assets/plants/Succelents/S007.jpg"


const ProductPagePlant = () => {

    let productData = [
        {
            title: "COO1-Plants",
            image: "/plants/cactus/C001.png"
            ,p:"Rs. ",
            price: 400
        },
        {
            title: "COO2-Plants",
            image:"/plants/cactus/C002.png",p:"Rs. ",
            price: 500
        },
        {
            title: "COO3-Plants",
            image:"/plants/cactus/C003.png",
            p:"Rs. ",
            price: 550
        },
        {
            title: "COO4-Plants",
            image: "/plants/cactus/C004.png",
            p:"Rs. ",
            price: 600
        },

        {
            title: "COO1-Plants",
            image: "/plants/cactus/C005.png"
            ,p:"Rs. ",
            price: 400
        },
        {
            title: "COO2-Plants",
            image:"/plants/cactus/C006.png",p:"Rs. ",
            price: 500
        },
        {
            title: "COO3-Plants",
            image:"/plants/cactus/C007.png",
            p:"Rs. ",
            price: 550
        },
        {
            title: "COO4-Plants",
            image: "/plants/cactus/C008.png",
            p:"Rs. ",
            price: 600
        },


        {
            title: "SOO1-Plants",
            image: "/plants/Succelents/S001.jpg"
            ,p:"Rs. ",
            price: 300
        },
        {
            title: "SOO2-Plants",
            image:"/plants/Succelents/S002.jpg",p:"Rs. ",
            price: 250
        },
        {
            title: "SOO3-Plants",
            image:"/plants/Succelents/S003.jpg",
            p:"Rs. ",
            price: 300
        },
        {
            title: "SOO4-Plants",
            image: "/plants/Succelents/S004.jpg",
            p:"Rs. ",
            price: 200
        },

        {
            title: "SOO5-Plants",
            image: "/plants/Succelents/S005.jpg"
            ,p:"Rs. ",
            price: 400
        },
        {
            title: "SOO6-Plants",
            image:"/plants/Succelents/S006.jpg",p:"Rs. ",
            price: 300
        },
        {
            title: "SOO7-Plants",
            image:"/plants/Succelents/S007.jpg",
            p:"Rs. ",
            price: 250
        }
     
    ]

    const [products, setProducts] = useState(productData)
    const [toPrice, setToPrice] = useState(0)
    const [fromPrice, setFromPrice] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, [])

    function toHandler(event) {
        setToPrice(event.target.value)
    }

    function fromHandler(event) {
        setFromPrice(event.target.value)
    }

    function filterHandler(event) {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        let filteredProducts = [];
        for (let i = 0; i < productData.length; i++) {
            if (productData[i].price >= +fromPrice && productData[i].price <= +toPrice) {
                filteredProducts.push({
                    title: productData[i].title,
                    image: productData[i].image,
                    p: productData[i].p,
                    price: productData[i].price

                })
            }
        }
        setProducts(filteredProducts)
    }

    return (
        <>
            <div className="row g-0 p-1">
                <div className="col-md-3">
                    <div className="card m-3">
                        <div className="card-header fw-bold bg-dark text-light">
                            PRICE FILTER
                        </div>
                        <div className="card-body mt-0">
                            <p>Price</p>
                            <input onChange={fromHandler} value={fromPrice} className="form-control" type="number"
                                   placeholder="From"/>
                            <input onChange={toHandler} value={toPrice} className="form-control mt-3" type="number"
                                   placeholder="To"/>
                            <button onClick={filterHandler} className="btn btn-primary btn-sm mt-3 float-end">Filter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mt-2">
                    <h3 className="ms-2">PLANTS</h3>
                    <div className="grid-container">
                        {loading ? <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span></div>
                        </div> : products.map((item, index) => <ProductItem key={index} price={item.price}
                                                                            title={item.title} image={item.image}
                                                                            p={item.p}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPagePlant