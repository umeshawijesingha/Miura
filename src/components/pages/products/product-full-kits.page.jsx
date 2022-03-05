import './product.css'
import ProductItem from "./product-item";
import {useEffect, useState} from "react";


/* import b from "../../../assets/full kit/F002.jpg"
import c from "../../../assets/full kit/F003.jpg"
import d from "../../../assets/full kit/F004.jpg" */

const ProductPageFullKit = () => {

    let productData = [
        {
            title: "F001",
            image: "/full kit/F001.jpg",p:"Rs. ",
            price: 400
        },
        {
            title: "F002",
            image:"/full kit/F002.jpg",p:"Rs. ",
            price: 500
        },
        {
            title: "F003",
            image:"/full kit/F003.jpg",
            p:"Rs. ",
            price: 550
        },
        {
            title: "F004",
            image: "/full kit/F004.jpg",
            p:"Rs. ",
            price: 600
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
                    <h3 className="ms-2">FULL-KITS</h3>
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
export default ProductPageFullKit