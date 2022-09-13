import { Button } from 'react-bootstrap';
import { defineEmail } from './eventsSlice';
import jwtDecode from 'jwt-decode'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()
    const email = useSelector((state) => state.events.email)

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
                if (notification.isSkippedMoment() || notification.isDismissedMoment()) {
                    setDisabled(false)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    if (!email) {
        return <Button id="loginButton" onClick={handleGoogleLogin}>
            Login with Google
        </Button>
    } else {
        return <h1>Hello {email}</h1>
    }
}

export default Login;