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
	} = props;

	const slideFrame = (e) => {
		// e.target.classList.add('left-frame')
		console.log(e);
	};

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
				<img src={imageSrc.default} alt={'anan'} onMouseEnter={slideFrame} />
			</div>
			<div className={`profile-info-container ${onLeft ? 'info-container-left' : ''}`}>
				<h1>🧑 {nameInfo}</h1>
				<h2>💼 {workInfo}</h2>
				<h2>🏠 {addressInfo || 'Istanbul'}</h2>
				<h2>📧 {mailInfo}</h2>
				<h2>📱 {phoneInfo}</h2>
				<h2>🔗 <a href={`https://www.${linkedinAddress}`}  target={'_blank'}>{linkedinAddress}</a></h2>
				<h2>🔗 <a href={`https://www.${githubAddress}`} target={'_blank'}>{githubAddress}</a> </h2>
			</div>
		</div>
	);
};

export default Profile;
