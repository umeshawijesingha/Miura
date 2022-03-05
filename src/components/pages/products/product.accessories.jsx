import './product.css'
import ProductItem from "./product-item";

import a from "../../../assets/Accessories/1.jpg"
import b from "../../../assets/Accessories/2.jpg"
import c from "../../../assets/Accessories/3.jpeg"
import d from "../../../assets/Accessories/4.jpg"
import e from "../../../assets/Accessories/7.jpg"
import f from "../../../assets/Accessories/12.jpg"
import g from "../../../assets/Accessories/8.jpg"
import h from "../../../assets/Accessories/9.jpg"
import i from "../../../assets/Accessories/10.jpg"
import j from "../../../assets/Accessories/11.jpg"


const ProductPageAccessories = () => {
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
                   <h3 className="ms-2">ACCESSORIES</h3>
                    <div className="grid-container">
                    <ProductItem price="Rs.25 (1 piece )" title="Small Wooden Lady Birds 1.1cm x 0.9cm " image={a} />
                        <ProductItem price="Rs.25 (1 piece )" title="Small Wooden Bees 1.1cm x 0.9cm" image={b} />
                        <ProductItem price="Rs.25 (1 piece )" title="Small Wooden coloured Lady Birds 1.1cm x 0.9cm" image={c} />
                        <ProductItem price="Rs.110 (1 piece )" title="Small cute turtle" image={d} />
                        <ProductItem price="Rs.620 (full set )" title="Small living room chair set with round table" image={e} />
                        <ProductItem price="Rs.650 (full set )" title="Small living room chair set with squre table" image={f} />
                        <ProductItem price="Rs.850 (full set )" title="Old romance couple" image={g} />
                        <ProductItem price="Rs.300 (1 piece )" title="Small Little girl 4.2cm x 2.2cm" image={h} />
                        <ProductItem price="Rs.220 (1 piece )" title="Small bench" image={i} />
                        <ProductItem price="Rs.320 (1 piece )" title="Small House for Dwarfs" image={j} />

                    </div>
               </div>
           </div>
        </>
    )
}
export default ProductPageAccessories