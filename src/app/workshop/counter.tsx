'use client';

import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	function increase() {
		setCount(count + 1);
	}

	function decrease() {
		setCount(count - 1);
	}

	return (
		<div className="my-20 flex gap-3">
			<input
				type="button"
				value={'-'}
				className="border"
				onClick={() => decrease()}
			/>
			{count}
			<input
				type="button"
				value={'+'}
				className="border"
				onClick={() => increase()}
			/>
		</div>
	);
}
