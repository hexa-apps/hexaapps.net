import React from 'react';
import ContentTitle from './ContentTitle';
import ContentParagraph from './ContentParagraph';
import SocialGrid from '../SocialGrid/SocialGrid';

const Content = () => {
	return (
		<div className="h-fit flex flex-col pt-12 pb-6 max-w-screen-sm mx-auto px-6  gap-4">
			<ContentTitle title="Hello, I'm Berkay 🛰️" />
			<ContentParagraph>
				I&apos;m a geomatics engineer who loves to code. Although I work
				professionally as a web frontend developer, I also develop applications
				for the Android and iOS ecosystem.
			</ContentParagraph>
			<ContentParagraph>
				I like to develop applications that touch people&apos;s lives and to
				experience different technologies. Football and Formula 1 are at the
				forefront of my interests. However, I can watch any sporting event
				breathlessly 🏅
			</ContentParagraph>
			<ContentParagraph>
				If you need more information about me, you can reach me on the following
				platforms.
			</ContentParagraph>
			<SocialGrid
				socialLinks={[
					{
						url: 'https://play.google.com/store/apps/dev?id=6243426129705745004',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Google Play Store',
						type: 'google-play',
					},
					{
						url: 'https://apps.apple.com/us/developer/berkay-oruc/id1636040465',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'App Store',
						type: 'app-store',
					},
					{
						url: 'https://www.linkedin.com/in/berkayoruc/',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Linkedin',
						type: 'linkedin',
					},
					{
						url: 'https://github.com/berkayoruc',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Github',
						type: 'github',
					},
					{
						url: 'https://medium.com/@berkayoruc',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Medium',
						type: 'medium',
					},
					{
						url: 'https://twitter.com/orucberkay',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Twitter',
						type: 'twitter',
					},
					{
						url: 'https://www.instagram.com/hexaapps/',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Instagram',
						type: 'instagram',
					},
					{
						url: 'https://www.youtube.com/c/berkayoruc',
						icon: 'https://picsum.photos/id/237/200/300.jpg',
						name: 'Youtube',
						type: 'youtube',
					},
				]}
			/>
		</div>
	);
};

export default Content;
