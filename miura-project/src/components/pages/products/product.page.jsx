import './product.css'
import ProductItem from "./product-item";

const ProductPage = () => {
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
                    <h3 className="ms-2">PRODUCTS</h3>
                    <div className="grid-container">
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                        <ProductItem price="$895" title="Lorem Ipsum"
                                     image="https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage