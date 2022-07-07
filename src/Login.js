import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { defineEmail } from './eventsSlice';

const Login = () => {
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()

    const handleResponse = (response) => {        
        console.log(response);
        const token = response.credential
        const decodedToken = jwtDecode(token)
        console.log(decodedToken);    
        dispatch(defineEmail(decodedToken.email))
    }
    const handleGoogleLogin = () => {
        setDisabled(true)
        try {
            window.google.accounts.id.initialize({
                client_id: "1045839805169-9vcgmva03ano3lo435i221gnd92580lh.apps.googleusercontent.com",
                itp_support: true,
                callback: handleResponse
            })
            window.google.accounts.id.prompt((notification) => {                
                if (notification.isNotDisplayed()) {
                    console.log(JSON.stringify(notification));
                    throw new Error(String(notification))
                }
                if (notification.isSkippedMoment() || notification.isDismissedMoment()){
                    setDisabled(false)
                }
            })
        } catch (error) {
          console.log(error);
        }
    }
    return (
        <Button onClick={handleGoogleLogin}>
            Login with Google
        </Button>
    )
}

export default Login;