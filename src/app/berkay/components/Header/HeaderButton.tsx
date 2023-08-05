import React from 'react';

const HeaderButton = ({
	text,
	onClick,
}: {
	text: string;
	onClick?: Function;
}) => {
	return (
		<button
			className="text-white"
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			{text}
		</button>
	);
};

export default HeaderButton;
