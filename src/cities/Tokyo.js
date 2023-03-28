import React from "react";

import artgallery from '../images/artgallery.jpeg';
import bobatea from '../images/bobatea.jpeg';
import broadway from '../images/broadway.jpeg';
import brunch from '../images/brunch.jpeg'
import cafe from '../images/cafe.jpeg'
import hotpot from '../images/hotpot.jpeg'
import koreanBBQ from '../images/KoreanBBQ.jpeg'
import omakase from '../images/omakase.jpg';
import oysters from '../images/oysters.jpeg';
import pluspool from '../images/pluspool.jpeg';
import nyc from '../images/nyc.jpg'
import nycattractions from '../images/nycattractions.jpeg';
import nycboroughs from '../images/boroughs.png'
import nycneighborhoods from '../images/neighborhoods.jpeg';
import pho from '../images/pho.jpeg';
import ramen from '../images/ramen.jpeg';
import nycsubway from '../images/nyc-subway.jpeg';
import rooftopbar from '../images/rooftopbar.jpeg';
import spa from '../images/spa.jpeg';
import speakeasy from '../images/speakeasy.jpeg';
import winebar from '../images/winebar.jpeg';
import goodies from '../images/goodies.jpeg';
import './NewYorkCity.css';

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addEvent } from '../eventsSlice'

export function Tokyo() {

    const dispatch = useDispatch()
    const email = useSelector((state) => state.events.email)

    return (
    // <div class="articleContainer">
    <div>
        <Link to="/">Bordersgone</Link>
        <h1>Tokyo</h1>
        <a href="https://www.booking.com" target="_blank"><b> Bookings </b>[housing]</a>
        <a href="https://ubereats.com" target="_blank"> <b> Ubereats </b>[delivery] [pickup] [food]</a>
        <a href="https://wolt.com" target="_blank"><b> Wolt </b>[delivery] [food]</a>
        <a href="https://cookpad-mart.com" target="_blank"><b> Cookpad </b>[pickup] [groceries]</a>
        <a href="https://www.hellocycling.jp" target="_blank"><b> Hello Cycling </b>[cyling][transporation]</a>        
    </div>)
}

export default Tokyo