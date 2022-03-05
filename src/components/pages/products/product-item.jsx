const ProductItem = (props) => {
    return(
        <div className="card rounded-3 m-2">
            <img className="img-fluid w-auto" width="250" height="250"
                 src={props.image}
                 alt="" srcSet=""/>
            <div className="m-2">
                <h6 className="text-center fw-bold text-dark mb-0 mt-2">{props.title}</h6>
                <h6 className="text-center fw-bold text-dark mb-0 mt-2">{props.price}</h6>
            </div>
        </div>
    )
}

export default ProductItem;