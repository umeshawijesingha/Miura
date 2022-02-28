import './login.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPword]= useState('');
    const [validate,setValidation]=useState(false); 

    
function emailcheck(event){
setEmail (event.target.value)

}

function passwordchecker(event){
    setPword(event.target.value)

}

function login(event){
    const usermail="admin12345@gmail.com";
    const userpassword="12345"

    if(email.toLowerCase().trim() === usermail && password === userpassword)
    {
setValidation(false);
navigate('/')
    }else
    {
       
setValidation(true); 
    }
    event.preventDefault();
}
    return (
        <>
            <div className="login-page">
                <div className="container">
                    <div className="row px-3 mb-5 pt-5">
                        <div className="col-lg-10 col-xl-9 card rounded-3    flex-row mx-auto px-0">
                            <div className="img-left d-none d-md-flex">
                            </div>

                      
                            <div className="card-body">
                                <h4 className="title text-center mt-4">
                                    Login!
                                </h4>
                                <form className="form-box px-3" >
                                {
                        validate && <div>
                    
                                <p className="invalid">Invalid Email / Password</p>
                                </div>
                                }
                                    <div className="form-input">
                                        <input type="email" placeholder="Iinput your Email" name="email" tabIndex="20"
                                            onChange={emailcheck} />
                                    </div>
                                    <div className="form-input">
                                        <input type="password" placeholder="*********" name="password" tabIndex="10"
                                            onChange={passwordchecker}   />
                                    </div>
                                    <div className="mb-3">
                                        <button onClick={login} className="btn btn-block text-capitalize">Login
                                        </button>
                                    </div>

                                    <div className="text-center mb-2">
                                        Don't have Account <a href="#" className="register-link"  onClick={() => {
                        navigate('/register')
                    }}>Register
                                        now!</a>
                                    </div>

                                    <div className="text-center mb-2">
                                        Forgot Password <a href="#" className="register-link">Recover password</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage