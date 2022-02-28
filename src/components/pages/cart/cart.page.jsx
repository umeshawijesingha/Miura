import './cart.css'
import {useNavigate} from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="container-cart">
                <h1 className="ms-0 text-uppercase fw-bold">Shopping Cart</h1>
                <div className="cart">
                    <div className="products">
                        <div className="product">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Parodia_microsperma.jpg/1200px-Parodia_microsperma.jpg"/>
                            <div className="product-info p-3">
                                <h4 className="product-name">Plant(C001)</h4>
                                <h5 className="product-price">rs 1,000</h5>
                                <h5 className="product-offer">50%</h5>
                                <p className="product-quantity">Qnt: <input value="1" name=""/>
                                    <p className="product-remove">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                        <span className="remove">Remove</span>
                                    </p>
                                </p>
                            </div>

                        </div>
                        <div className="product">
                            <img
                                src="https://target.scene7.com/is/image/Target/GUEST_eb765d2d-3460-48dc-9755-f06c637fec0d?wid=488&hei=488&fmt=pjpeg"/>
                            <div className="product-info p-3">
                                <h4 className="product-name">Cement Pot</h4>
                                <h5 className="product-price">rs 500</h5>
                                <h5 className="product-offer">40%</h5>
                                <p className="product-quantity">Qnt: <input value="1" name=""/>
                                    <p className="product-remove">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                        <span className="remove">Remove</span>
                                    </p>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="cart-total">
                        <p>
                            <span>Total Price</span>
                            <span></span>
                        </p>
                        <p>
                            <span>Number of Items</span>
                            <span></span>
                        </p>
                        <p>
                            <span>You Save</span>
                            <span></span>
                        </p>
                        <button className="btn w-100 mb-2 btn-primary" onClick={() => {
                            navigate('/cart/checkout')
                        }}>Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;