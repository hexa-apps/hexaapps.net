import React from 'react';
import HeaderButton from './HeaderButton';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="fixed max-w-screen-sm w-full mx-auto py-1 px-6 flex justify-between bg-slate-700">
			<Link href="/">
				<span className="text-white rotate-180 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
					-&gt;
				</span>
			</Link>
			{/* <HeaderButton text={'Geri'}  /> */}
			{/* <HeaderButton text={'Button'} /> */}
		</div>
	);
};

export default Header;
