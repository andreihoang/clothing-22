import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import {selectCartTotal }from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/user/user.selector'

import './payment-form.scss'
import Button from "../button/button";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
   
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res => res.json());

        const {paymentIntent: {client_secret}} = response;

        console.log(client_secret);
        
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment ok')
            }
        }

    }

    return (
        <form className="payment-form-container" onSubmit={paymentHandler}>
        <div className="form-container">
        <h2>Creadit Card Payment</h2>
            <CardElement />
            <Button disable={isProcessingPayment} >Pay now</Button>

        </div>
            
        </form>
    )
}

export default PaymentForm;