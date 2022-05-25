import SignUpForm from "../../components/sign-up/sign-up-form";
import SignInForm from "../../components/sign-in/sign-in";
import './authentication.scss'

const Authentication = () => {

    
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            
        </div>
    )
}

export default Authentication;