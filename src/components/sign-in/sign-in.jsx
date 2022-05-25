
import { useState} from "react";



import { signInWithGooglePopup, 
        createUserDocumentFromAuth,
        signInAuthUserWithEmailAndPassword   
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-in.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";


const defaultFormFields = {

    email: '',
    password: '',
 
} 

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
       
       
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword (email, password);
            resetFormFields();
        } catch(err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('inccorect password');
                    break
                default:
                    console.log(err);
            }
            console.log('adddd oh', err)
        }}

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setFormFields({...formFields, [name]: value})
    };    

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form>
            
        </div>
        
    )
}

export default SignInForm;