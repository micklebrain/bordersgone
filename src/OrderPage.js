import React, { useState, useEffect, useSearchParams } from 'react';
import { useLocation } from 'react-router-dom'

const OrderPage = (props) => {
    const location = useLocation();
    const data = location.state;    

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default OrderPage

