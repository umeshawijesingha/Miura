import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
    console.log("clicked");
    console.log(product.name);
    console.log(product.id);
    console.log(product.price);
  };

  const quantityHandler = (qty, cartItem) => {
    cartItem.itemQty = qty;
    console.log(cartItem.id);
    console.log("quantityhandler");
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    navigate("/cart");
  };

  const subTotal = () => {
    var sub = 0;
    cartItems.map((item) => {
      sub = sub + parseFloat(item.itemQty) * item.price;
      console.log(sub);
      return " sub";
    });

    console.log("sub");
    console.log(sub);
    return sub.toFixed(2);
  };

  const hi = () => {
    return "Hello";
  };

  useEffect(() => {
    subTotal();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <div className='container-cart'>
        <h1 className='ms-0 text-uppercase fw-bold'>Shopping Cart</h1>
        <div className='cart'>
          <div className='products'>
            {cartItems.map((cartItem) => {
              return (
                <div className='product' key={cartItem.id}>
                  <img src={cartItem.image} />
                  <div className='product-info p-3'>
                    <h4 className='product-name'>{cartItem.name}</h4>
                    <h5 className='product-price'>Rs.{cartItem.price}.00</h5>

                    <p className='product-quantity'>
                      Qnt:{" "}
                      <input
                        type='number'
                        max={cartItem.quantity}
                        min={1}
                        placeholder={cartItem.itemQty}
                        onChange={(e) =>
                          quantityHandler(e.target.value, cartItem)
                        }
                      ></input>
                      <p className='product-remove'>
                        <i
                          className='fa fa-trash'
                          aria-hidden='true'
                          onClick={() => {
                            deleteFromCart(cartItem);
                          }}
                        ></i>
                        {/* <button className="remove" onClick={()=>{
                                                deleteFromCart(cartItem)
                                            }}>Remove</button> */}
                      </p>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='cart-total'>
            <div className='row'>
              <p>
                <span style={{ color: "red" }}>PRICE DETAILS</span>
                <h5 style={{ color: "black" }}>PRICE DETAILS</h5>
                <span></span>
              </p>
            </div>
            <div className='row'>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#b0aea9" }}>Subtotal</h5>
                <span></span>
              </div>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#b0aea9" }}>
                  {subTotal()}
                </h5>
                <span></span>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#b0aea9" }}>
                  Shipping Fee
                </h5>
                <span></span>
              </div>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#439612" }}>FREE</h5>
                <span></span>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#b0aea9" }}>Total</h5>
                <span></span>
              </div>
              <div className='col'>
                <h5 style={{ padding: "5px", color: "#b0aea9" }}>
                  {subTotal()}
                </h5>
                <span></span>
              </div>
            </div>

            <button
              className='btn w-100 mb-2 btn-primary'
              onClick={() => {
                navigate("/cart/checkout");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
