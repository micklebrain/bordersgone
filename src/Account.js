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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={e => { handleSubmit(e) }}>
                <label for="legalName">Legal name:</label>
                <input type="text" id="legalName" name="legalName" value={firstName + ' ' + lastName} />
                <label for="email">Email address:</label>
                <input type="email" id="email" name="email" value={email} />
                <label for="venmoUsername">Venmo username:</label>
                <input type="text" id="venmoUsername" name="venmoUsername" value={venmo} />
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
                <input
                    className='submitButton'
                    type='submit'
                    value='Submit Changes'
                />
            </form>
        </div>
    );
};

export default Account
