
import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import './sign-up.scss'
import Button from "../button/button";
import { signUpStart} from "../../store/user/user.action";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
} 

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmedPassword} = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // form submit -> confirmed password match -> create user document
        if (password !== confirmedPassword) {
            alert('not match pass');
            return;
        }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch(err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('email in use')
            } else {
                console.log('user error', err)
            }
        }}

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setFormFields({...formFields, [name]: value})
    };    

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

                <FormInput label='Confirmed Password' type='password' required onChange={handleChange} name="confirmedPassword" value={confirmedPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
        
    )
}

export default SignUpForm