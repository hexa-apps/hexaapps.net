import React, { useRef } from 'react';
import defaultImageSrc from '../assets/template-image.png';
const ApplicationElement = (props) => {
	const { imageSrc } = props;
	const hoverBackgroundRef = useRef(null);
    const imageRef = useRef(null)

	const displayHoverContainer = (e) => {
		hoverBackgroundRef.current.style.animationName = 'display';
        imageRef.current.style.animationName = 'zoomIn'
	};

	const displayNotHoverContainer = () => {
		hoverBackgroundRef.current.style.animationName = 'displayNot';
        imageRef.current.style.animationName = 'zoomOut'
	};
	return (
		<div
			className="application-element"
			onMouseOver={displayHoverContainer}
			onMouseLeave={displayNotHoverContainer}
		>
			<img ref={imageRef} src={`${imageSrc ? imageSrc : defaultImageSrc}`} />
			<div ref={hoverBackgroundRef} className="hover-background">
				<span>
					lorem Imdsfodsakmasdfm dfadsşlf sfmsa dfm salkf msadlkfsad fsadfsalkd{' '}
				</span>
			</div>
		</div>
	);
};

export default ApplicationElement;
