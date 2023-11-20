import React from 'react';
import SocialGridItem from './SocialGridItem';

const SocialGrid = ({
	socialLinks,
}: {
	socialLinks: { url: string; type: string; icon: string; name: string }[];
}) => {
	return (
		<div className="h-fit grid grid-cols-3 sm:grid-cols-4 gap-8 justify-items-center items-center mt-4">
			{socialLinks.map((socialLink, index) => {
				return <SocialGridItem key={index} socialLink={socialLink} />;
			})}
		</div>
	);
};

export default SocialGrid;
