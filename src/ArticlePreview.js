import React, { useState, useEffect, useSearchParams } from 'react';
import { Link } from "react-router-dom";
import ramen from './images/ramen.jpeg';
import speakeasy from './images/speakeasy.jpeg';

const ArticlePreview = (props) => {
    return (
        <div>
            <Link to="/newyorkcity/NYCRamenArticle" class="articlePreview"> <img class="articleImage" src={ramen} alt="NYC Ramen guide" /> </Link> <div> <div class="articleTitle">NYC Ramen Guide</div> <div>last updated Jan 27, 2022 </div> </div>
            <Link to="/newyorkcity/NYCSpeakeasiesArticle" class="articlePreview"> <img class="articleImage" src={speakeasy} alt="NYC speakeasies guide" /> </Link> <div> <div class="articleTitle">NYC speakeasies guide</div> <div>last updated Jan 27, 2022 </div> </div>
        </div>
    );
};

export default ArticlePreview

