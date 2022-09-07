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
                resyJson['doc'].forEach(order => {
                    setOrders(arr => [...arr, order]);
                });
            })
            .catch(error => console.log('error', error));
    }, []);

    const Orders = () => {
        var userOrders = []
        orders.forEach(order => {
            userOrders.push(<h2>{order.orderId}</h2>)
            userOrders.push(<h2>{order.amount}</h2>)
        })
        return userOrders
    }

    return (
        <div>
            <h1>Email</h1>
            <h2>{email}</h2>
            <h1>First Name</h1>
            <h2>{firstName}</h2>
            <h1>Last Name</h1>
            <h2>{lastName}</h2>
            <h1>Cash App</h1>
            <h1>Venmo</h1>
            <h2>{venmo}</h2>
            <h1>Orders</h1>
            {Orders}
        </div>
    );
};

export default Account
