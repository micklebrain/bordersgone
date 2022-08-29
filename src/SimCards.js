import React, { useState, useEffect, useSearchParams } from 'react';

const SimCards = (props) => {
    return (
        <div>
            <h1>Sim Cards</h1>

            <h1>Korea</h1>
            <li>KT</li>
            <li>LGU+</li>
            <li>SKT Telcom</li>

            <h1>Malaysia</h1>
            <li>Digi</li>
            <li>Maxis/Hotlink</li>
            <li>Celcom</li>
            <li>U mobile</li>
            <li>Yes</li>
            <li>Unifi/Bebas</li>

            <h1>United States</h1>
            <li>T-Mobile</li>
            <li>Verizon</li>
            <li>ATT</li>             

            <h1>Vietnam</h1>
            <li>Viettel</li>
            <li>MobiFone</li> 
            <li>Vinaphone</li>
        </div>
    );
};

export default SimCards

