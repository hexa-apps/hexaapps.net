import React from 'react';
import ArticleElement from './ArticleElement';
import ApplicationElement from './ApplicationElement';
import defaultImageSrc from '../assets/template-image.png'

const Showcase = (props) => {

    const articleList = [
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
    ]
    const articleElements = articleList.map((element) => {
        return <ArticleElement props={element} />
    })
    const applicationList = [
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
        {imageSrc : defaultImageSrc},
    ]
    const applicationElements = applicationList.map((element) => {
        return <ApplicationElement props={element} />
    })
	return (
		<div className="showcase-section">
			<label>Articles</label>
			<div className="article-showcase">
                {articleElements}
            </div>
			<label>Applications</label>
			<div className="application-showcase">
                {applicationElements}
            </div>
		</div>
	);
};

export default Showcase;
