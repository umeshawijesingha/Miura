import { useNavigate } from "react-router";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className='card rounded-3 m-2'>
      <img
        className='img-fluid w-auto'
        width='250'
        height='250'
        src={product.image}
        alt=''
        srcSet=''
      />
      <div className='m-2'>
        <h6 className='text-center fw-bold text-dark mb-0 mt-2'>
          {product.title}
        </h6>
        <h6 className='text-center fw-bold text-dark mb-0 mt-2'>
          {product.price}
        </h6>
        <div className='col-md-12 text-center form-group row '>
          <button
            className='btn btn-success text-center '
            onClick={() => {
              navigate(`/product/product-info/${product.id}`);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
