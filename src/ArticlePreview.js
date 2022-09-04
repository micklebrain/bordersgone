import React, { useState, useEffect, useSearchParams } from 'react';

const ArticlePreview = (props) => {
    return (
        <div>
            <Link to="/newyorkcity/NYCEventsArticle" class="articlePreview"> <img class="articleImage" src={nyc} alt="Events" /> </Link> <div> <div class="articleTitle"> Events </div> <div>Jan 27, 2022</div> </div>
        </div>
    );
};

export default ArticlePreview

