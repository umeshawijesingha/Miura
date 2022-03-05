import {useNavigate} from "react-router";

const CheckoutPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div>
                    <h1 className="ms-0">Billing Address</h1>

                    <div className="form-group">
                        <label for=""> Name</label>
                        <input className="form-control" type="text"/>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="">Address</label>
                        <input className="form-control" type="text"/>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="">Contacct Number</label>
                        <input className="form-control" type="text"/>
                    </div>

                    <div className="card my-3">
                        <div className="card-header bg-dark text-white text-uppercase fw-bold">
                            Price details
                        </div>

                        <div className="card-body mt-0">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>‍ෙ
                                </thead>
                                <tbody>
                             
                                </tbody>
                            </table>

                            <button className="btn btn-success float-end">Proceed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;