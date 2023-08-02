import React from 'react';

export default function DynamicRoute({ params }: {params: {dynamic: string}}) {
	return <div>Dynamic Route: {params.dynamic} </div>;
}
