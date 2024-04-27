import { auth } from '@clerk/nextjs/server';
import React from 'react';

const Test = () => {
	const { userId }: { userId: string | null } = auth();
	return <div>Test {userId}</div>;
};

export default Test;
