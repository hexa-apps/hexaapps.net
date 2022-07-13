import React, { useRef } from 'react';
import defaultImageSrc from '../assets/template-image.png';
const ArticleElement = (props) => {
	console.log(props);
	const { imageSrc, description, link } = props;
	const hoverBackgroundRef = useRef(null);
	const imageRef = useRef(null);

	const displayHoverContainer = (e) => {
		hoverBackgroundRef.current.style.animationName = 'display';
		imageRef.current.style.animationName = 'zoomIn';
	};

	const displayNotHoverContainer = () => {
		hoverBackgroundRef.current.style.animationName = 'displayNot';
		imageRef.current.style.animationName = 'zoomOut';
	};

	const openLinkAddress = () => {
		window.open(link, '_blank')
	}
	return (
		<div
			className="article-element"
			onMouseOver={displayHoverContainer}
			onMouseLeave={displayNotHoverContainer}
		>
			<img ref={imageRef} src={`${imageSrc ? imageSrc : defaultImageSrc}`} />
			<div ref={hoverBackgroundRef} onClick={openLinkAddress} className="hover-background">
				<span>
					{description}
				</span>
			</div>
		</div>
	);
};

export default ArticleElement;
