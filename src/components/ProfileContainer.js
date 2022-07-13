import React from 'react';
import Profile from './Profile';
import * as alihan from '../assets/alihan.png';
import * as berkay from '../assets/berkay.png';

const ProfileContainer = () => {
	return (
		<div className='profile-container'>
			<Profile
				imageSrc={alihan}
				onLeft={true}
				nameInfo={'Alihan Keskin'}
				workInfo={'Istanbul M. Municipality'}
				addressInfo={'Şişli / İstanbul'}
				mailInfo={'akeskinw@gmail.com'}
				phoneInfo={'+905384643518'}
				linkedinAddress={'linkedin.com/in/alihankeskin'}
				githubAddress={'github.com/Ardelon'}
				mediumAddress={'medium.com/@akeskinw'}
			/>
			<Profile
				imageSrc={berkay}
				nameInfo={'Berkay Oruç'}
				workInfo={'Istanbul M. Municipality'}
				addressInfo={'Kağıthane / İstanbul'}
				mailInfo={'orucbe@gmail.com'}
				phoneInfo={'+905384643518'}
				linkedinAddress={'linkedin.com/in/berkayoruc'}
				githubAddress={'github.com/berkayoruc'}
				mediumAddress={'medium.com/@berkayoruc'}
			/>
		</div>
	);
};

export default ProfileContainer;
