import React, { useState, useEffect, useSearchParams } from 'react';
import { Link } from "react-router-dom";
import ramen from './images/ramen.jpeg';
import speakeasy from './images/speakeasy.jpeg';

const ArticlePreview = (props) => {
    return (
        <div>
            <img class="articleImage" src={ramen} alt="NYC Ramen guide" /> <div> <div class="articleTitle">NYC Ramen Guide</div> </div>
            <li>Ajisen</li>
            <li>Ichiran</li>
            <li>Ramen Goku</li>
            <li>Tenho Ramen</li>
            <li>Zen Ramen & Sushi</li>
            <div>last updated Jan 27, 2022 </div>
            <img class="articleImage" src={speakeasy} alt="NYC speakeasies guide" /> <div> <div class="articleTitle">NYC speakeasies guide</div> </div>
            <li>Angel Share</li>
            <li>Attaboy</li>
            <li>Keys & Heels</li>
            <li>Little Branch</li>
            <li>Nothing Really Matters</li>
            <li>PDT</li>
            <li>Thyme Bar</li>
            <li>The Woo Woo NYC</li>
            <div>last updated Jan 27, 2022 </div>
        </div>
    );
};

export default ArticlePreview

