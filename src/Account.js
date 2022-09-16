import React, { useState, useEffect, useSearchParams } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Account = (props) => {
    const email = useSelector((state) => state.events.email)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [venmo, setVenmo] = useState('');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = "https://lostmindsbackend.vercel.app/users/" + email
        fetch(url, {
            method: 'GET'
        }).then(response => response.text())
            .then(response => {
                var resyJson = JSON.parse(response);
                console.log(resyJson);
                setFirstName(resyJson['doc'][0]['firstName']);
                setLastName(resyJson['doc'][0]['lastName']);
                setVenmo(resyJson['doc'][0]['venmo']);
            })
            .catch(error => console.log('error', error));

        // fetch all orders for user
        const ordersUrl = "https://lostmindsbackend.vercel.app/orders/" + email
        fetch(ordersUrl, {
            method: 'GET'
        }).then(response => response.text())
            .then(response => {
                var resyJson = JSON.parse(response);
                console.log(resyJson);
                setOrders([]);
                resyJson['doc'].forEach(order => {                    
                    setOrders(arr => [...arr, order]);
                });
            }).catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <h3>Legal name</h3>
            <h3>{firstName} {lastName}</h3>
            <h3>Email address</h3>
            <h3>{email}</h3>    
            <h3>Venmo</h3>
            <h3>{venmo}</h3>
            {/* <h1>Cash App</h1> */}
            <h3>Orders</h3>
            <div>{orders.map(order =>
                <div>{
                    <div>
                        <h2>order id: {order.orderId}</h2>
                        <h2>total amount: ${order.amount}</h2>
                        <h2>order status: {order.status}</h2>
                    </div>
                }</div>
            )}</div>
        </div>
    );
};

export default Account
