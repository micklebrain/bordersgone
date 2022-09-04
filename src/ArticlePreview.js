import React, { useState, useEffect, useSearchParams } from 'react';
import { Link } from "react-router-dom";
import ramen from './images/ramen.jpeg';

const ArticlePreview = (props) => {
    return (
        <div>
            <Link to="/newyorkcity/NYCRamenArticle" class="articlePreview"> <img class="articleImage" src={ramen} alt="NYC Ramen guide" /> </Link> <div> <div class="articleTitle"> NYC Ramen Guide </div> <div> Jan 27, 2022 </div> </div>
        </div>
    );
};

export default ArticlePreview

