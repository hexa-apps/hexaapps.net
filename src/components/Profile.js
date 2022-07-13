import React from 'react';

const Profile = (props) => {
	const {
		imageSrc,
		onLeft,
		nameInfo,
		workInfo,
		addressInfo,
		mailInfo,
		phoneInfo,
		linkedinAddress,
		githubAddress,
		mediumAddress
	} = props;

	return (
		<div
			className={`app-profile ${
				onLeft ? 'app-profile-on-left' : 'app-profile-on-right'
			}`}
		>
			<div
				className={`profile-image-container ${
					onLeft ? 'profile-on-left' : 'profile-on-right'
				}`}
				// onMouseLeave={() => this.someOtherHandler}
			>
				<img src={imageSrc} alt={'profile pictures'}  />
			</div>
			<div className={`profile-info-container ${onLeft ? 'info-container-left' : ''}`}>
				<h2>🧑 {nameInfo}</h2>
				<h3>💼 {workInfo}</h3>
				<h3>🏠 {addressInfo || 'Istanbul'}</h3>
				<h3>📧 {mailInfo}</h3>
				<h3>📱 {phoneInfo}</h3>
				<h3>🔗 <a href={`https://www.${linkedinAddress}`}  target={'_blank'}>{linkedinAddress}</a></h3>
				<h3>🔗 <a href={`https://www.${githubAddress}`} target={'_blank'}>{githubAddress}</a> </h3>
				<h3>🔗 <a href={`https://www.${mediumAddress}`} target={'_blank'}>{mediumAddress}</a> </h3>
			</div>
		</div>
	);
};

export default Profile;
