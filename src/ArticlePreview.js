import React, { useState, useEffect, useSearchParams } from 'react';
import { Link } from "react-router-dom";
import ramen from './images/ramen.jpeg';
import speakeasy from './images/speakeasy.jpeg';

const ArticlePreview = (props) => {
    return (
        <div>
            <img class="articleImage" src={ramen} alt="NYC Ramen guide" /> <div> <div class="articleTitle">NYC Ramen Guide</div> </div>
            <ul>
                <li>Ajisen</li>
                <li>Ichiran</li>
                <li>Ramen Goku</li>
                <li>Tenho Ramen</li>
                <li>Zen Ramen & Sushi</li>
            </ul>
            <div>last updated Jan 27, 2022 </div>
            <img class="articleImage" src={speakeasy} alt="NYC speakeasies guide" /> <div> <div class="articleTitle">NYC speakeasies guide</div> </div>
            <ul>
                <li>Angel Share</li>
                <li>Attaboy</li>
                <li>Keys & Heels</li>
                <li>Little Branch</li>
                <li>Nothing Really Matters</li>
                <li>PDT</li>
                <li>Thyme Bar</li>
                <li>The Woo Woo NYC</li>
            </ul>
            <div>last updated Jan 27, 2022 </div>
            <h1> NYC Omakase Guide </h1>
            <ul>
                <li>Sugarfish | $27 - $67 | 5 - ? pieces</li>
                <li>Sushi on Jones | $58 - $105 | 12 - 20 pieces</li>
                <li>Hasaki | $58 - $150 | 10 - 12 pieces</li>
                <li>Dojo Sushi | $60 - $128 | 10 - 15 pieces</li>
                <li>Omakase SUSHI DAIRO | $75 | 11 pieces</li>
                <li>Mojo Omakase | $90</li>
                <li>Omakase room by Maaser | $95-$135 | 12 - 17 pieces</li>
                <li>Sushi Ginza Onodera | $130-$450</li>
                <li>Sushi Teru | $130-$200</li>
                <li>Cagen | $150</li>
                <li>Sushi Nakazawa NY | $150 @ table - $180 @ counter</li>
                <li>Kanoyama | $170</li>
                <li>Omakase Room by Mitsu | $180 | 12 pieces</li>
                <li>Omakase Room by Tatsu | $180</li>
                <li>Sushi Amane | $200</li>
                <li>Kosaka | $200 @ Table \ $225 @ Bar</li>
                <li>Shuko | $228</li>
                <li>Sushi Noz | $230-$400</li>
                <li>Nakaji | $265</li>
                <li>Kaiseki Room By Yamada | $300</li>
                <li>Sushi Zo | Varies</li>
            </ul>
        </div>
    );
};

export default ArticlePreview

