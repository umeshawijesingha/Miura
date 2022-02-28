import './reg.css';
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react"; 
import FormInput from "./FormInput";

const RegisterPage = () => {
    const navigate = useNavigate()
    

        const [values, setValues] = useState({
          username: "",
          email: "",
          phonenumber: "",
          password: "",
          confirmPassword: "",
        });
      
        const inputs = [
          {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
          },
          {
            id: 3,
            name: "phonenumber",
            type: "number",
            placeholder: "phonenumber",
            label: "phonenumber",
            pattern:'^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$'
          },
          {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
              "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$`,
            required: true,
          },
          {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
          },
        ];
      
        const handleSubmit = (e) => {
          e.preventDefault();
          navigate('/');
        };
      
        const onChange = (e) => {
            
          setValues({ ...values, [e.target.name]: e.target.value });
          
        }; 
      
      /*   function register(event){
            if( username  != ""  ||
            email   !== "" ||
            phonenumber   !== "" ||
            password   !== "" ||
            confirmPassword   !=="")
            
        } */
        return (
          <div className="app">
            <form className='zzz' onSubmit={handleSubmit}>
              <h1>Register</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className='zz'  >Submit</button>
            </form>
          </div>
        );
      };
      
export default RegisterPage