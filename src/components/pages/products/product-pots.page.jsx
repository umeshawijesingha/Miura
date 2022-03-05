import './product.css'
import ProductItem from "./product-item";

import a from "../../../assets/pots/cement/CP001.jpg"
import b from "../../../assets/pots/cement/CP002.jpg"
import c from "../../../assets/pots/cement/CP003.jpg"
import d from "../../../assets/pots/cement/CP004.jpg"
import e from "../../../assets/pots/cement/CP005.jpg"
import f from "../../../assets/pots/cement/CP006.jpg"
import g from "../../../assets/pots/cement/CP007.jpg"
import h from "../../../assets/pots/cement/CP008.jpg"
import i from "../../../assets/pots/cement/CP009.jpg"

import a1 from "../../../assets/pots/wood/WP001.jpg"
import b1 from "../../../assets/pots/wood/WP002.jpg"
import c1 from "../../../assets/pots/wood/WP003.jpg"
import d1 from "../../../assets/pots/wood/WP004.jpg"
import e1 from "../../../assets/pots/wood/WP005.jpg"
import f1 from "../../../assets/pots/wood/WP006.jpg"
import g1 from "../../../assets/pots/wood/WP007.jpg"
import h1 from "../../../assets/pots/wood/WP008.jpg"
import i1 from "../../../assets/pots/wood/WP009.jpg"
import j1 from "../../../assets/pots/wood/WP010.jpg"

import a2 from "../../../assets/pots/ceremic/CE001.jpg"
import b2 from "../../../assets/pots/ceremic/CE002.jpg"
import c2 from "../../../assets/pots/ceremic/CE003.jpg"
import d2 from "../../../assets/pots/ceremic/CE004.jpg"
import e2 from "../../../assets/pots/ceremic/CE005.jpg"

import a3 from "../../../assets/pots/clay/CL001.jpg"
import b3 from "../../../assets/pots/clay/CL002.jpg"
import c3 from "../../../assets/pots/clay/CL003.jpg"
import d3 from "../../../assets/pots/clay/CL004.jpg"
import e3 from "../../../assets/pots/clay/CL005.jpg"
import f3 from "../../../assets/pots/clay/CL006.jpg"
import g3 from "../../../assets/pots/clay/CL007.jpg"
import h3 from "../../../assets/pots/clay/CL008.jpg"
import i3 from "../../../assets/pots/clay/CL009.jpg"
import j3 from "../../../assets/pots/clay/CL010.jpg"


const ProductPagePots = () => {
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
                            <input className="form-control" type="text" placeholder="From"/>
                            <input className="form-control mt-3" type="text" placeholder="To"/>
                            <button className="btn btn-primary btn-sm mt-3 float-end">Filter</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mt-2">
                    <h3 className="ms-2">POTS</h3>
                    <div className="grid-container">
                    <ProductItem price="Rs.90/=" title="100% quality white cement polimorphism pots Height 4.7cm  width 5.4cm   Weight 110g"
                                     image={a}/>
                        <ProductItem price="Rs.90/=" title="100% quality white cement round pots Height 4.7cm  width 5.4cm   Weight 110g"
                                     image={b}/>
                        <ProductItem price="Rs. 100/=" title="100% quality white cement pentateus pots Height 4.3cm  width 6.5cm  Weight 95g"
                                     image={c}/>
                        <ProductItem price="Rs.80/=" title="100% quality white cement square pots Height 3.6cm  width 5cm  Weight 60g"
                                     image={d}/>
                        <ProductItem price="Rs.95/=" title="100% quality white cement hexagon pots Height 3.2cm  width 6.5cm  Weight 85g"
                                     image={e}/>
                        <ProductItem price="Rs.100/=" title="100% quality white flower shaped cement pots Height 4.7cm  width 6.5cm  Weight 100g"
                                     image={f}/>
                        <ProductItem price="Rs.100/=" title="100% quality white cement ovel pots Height 3.3cm  width 10cm  Weight 100g"
                                     image={g}/>
                        <ProductItem price="Rs.120/=" title="100% quality white cement heart pots Height 3.4cm  width 6.5cm  Weight 100g"
                                     image={h}/>
                        <ProductItem price="Rs.70/=" title="100% quality white cement mini pots Height 3.2cm  width 5.4cm  Weight 65g"
                                     image={i}/>

                        <ProductItem price="Rs.900/=" title="High quality finished long wood pots 45*12*10cm  Weight 1kg"
                                     image={a1}/>
                        <ProductItem price="Rs.360/=" title="High quality finished square raw wood pots 12*12*10cm  Weight 600-700g"
                                     image={b1}/>
                        <ProductItem price="Rs.360/=" title="High quality finished square wood pots 12*12*10cm  Weight 500g"
                                     image={c1}/>
                        <ProductItem price="Rs.900/=" title="High quality finished long raw wood pots 45*12*10cm  Weight 1.5kg"
                                     image={d1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={e1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={f1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={g1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={h1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={i1}/>
                        <ProductItem price="Rs.300/=" title="High quality finished wood pots Height 6.3cm  width 10cm  Weight 450g"
                                     image={j1}/>

                        <ProductItem price="Rs.1500/=" title="Smoothy finished flower shape ceremic pots Height 7inc  width 6inc"
                                     image={a2}/>
                        <ProductItem price="Rs.600/=" title="Smoothy finished cat paw ceremic pots Height 4.2inc  width 3.5inc"
                                     image={b2}/>
                        <ProductItem price="Rs.650/=" title="Smoothy finished bottle shape ceremic pots Height 4.2inc  width 3.5inc"
                                     image={c2}/>
                        <ProductItem price="Rs.1100/=" title="Smoothy finished rabbit paw ceremic pots Height 6inc  width 4inc"
                                     image={d2}/>
                        <ProductItem price="Rs.600/=" title="Smoothy finished four pettles ceremic pots Height 4.2inc  width 3.5inc"
                                     image={e2}/>

                        <ProductItem price="Rs.150/=" title="Highly finished round clay pots Height 7cm  width 8.5cm"
                                     image={a3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished square clay pots Height 6.5cm  width 7.5cm"
                                     image={b3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished heart clay pots Height 7cm  width 8cm"
                                     image={c3}/>
                        <ProductItem price="Rs.190/=" title="Highly finished round clay pots Height 9cm  width 9.5cm"
                                     image={d3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished cilinder clay pots Height 6.5cm  width 7cm"
                                     image={e3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished  clay pots Height 5.5cm  width 6.5cm"
                                     image={f3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished  clay pots Height 6cm  width 7cm"
                                     image={g3}/>
                        <ProductItem price="Rs.250/=" title="Highly finished long ovel clay pots Height 6cm  width 16.5cm"
                                     image={h3}/>
                        <ProductItem price="Rs.200/=" title="Highly finished round ball clay pots Height 6cm  width 12cm"
                                     image={i3}/>
                        <ProductItem price="Rs.150/=" title="Highly finished round and square clay pots Height 3cm  width 7.5cm"
                                     image={j3}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPagePots