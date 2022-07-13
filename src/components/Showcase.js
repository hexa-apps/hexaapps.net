import React from 'react';
import ArticleElement from './ArticleElement';
import ApplicationElement from './ApplicationElement';
import defaultImageSrc from '../assets/template-image.png';
import { articleData } from '../data/articleData';
import { applicationData } from '../data/applicationData';

const Showcase = (props) => {
	const articleElements = articleData.map((element) => {
		return (
			<ArticleElement
				imageSrc={element.imageSrc}
				link={element.link}
				description={element.description}
			/>
		);
	});

	const applicationElements = applicationData.map((element) => {
		return (
			<ApplicationElement
				imageSrc={element.imageSrc}
				link={element.link}
				description={element.description}
			/>
		);
	});
	return (
		<div className="showcase-section">
			<label>Articles</label>
			<div className="article-showcase">{articleElements}</div>
			<label>Applications</label>
			<div className="application-showcase">{applicationElements}</div>
		</div>
	);
};

export default Showcase;
