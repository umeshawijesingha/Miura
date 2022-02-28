import './product.css'
import ProductItem from "./product-item";

import a from "../../../assets/stone/1.jpeg"
import b from "../../../assets/stone/2.jpeg"
import c from "../../../assets/stone/7.jpg"
import d from "../../../assets/stone/4.jfif"
import e from "../../../assets/stone/5.jpeg"
import f from "../../../assets/stone/6.jpg"


const ProductPageStones = () => {
    return(
        <>
           <div className="row g-0 p-1">
               <div className="col-md-3">
                    <div className="card m-3">
                        <div className="card-header fw-bold bg-dark text-light">
                            PRICE FILTER
                        </div>
                        <div className="card-body mt-0">
                            <p>Price</p>
                            <input className="form-control" type="text" placeholder="From"/>
                            <input className="form-control mt-3" type="text" placeholder="To"/>
                            <button className="btn btn-primary btn-sm mt-3 float-end">Filter</button>
                        </div>
                    </div>
               </div>
               <div className="col-md-9 mt-2">
                   <h3 className="ms-2">STONES</h3>
                    <div className="grid-container">
                    <ProductItem price="Rs.90 (1kg)" title="Small White Stones" image={a} />
                        <ProductItem price="Rs.150 (1kg)" title="Large White Stones" image={b} />
                        <ProductItem price="Rs.100 (1kg)" title="Brown Quartz Stones" image={c} />
                        <ProductItem price="Rs.120 (1kg)" title="Pebbles Mables" image={d} />
                        <ProductItem price="Rs.90 (1kg)" title="Small Black Stones" image={f} />
                        <ProductItem price="Rs.120 (1kg)" title="Small Yellow Stones" image={e} />
                    </div>
               </div>
           </div>
        </>
    )
}
export default ProductPageStones