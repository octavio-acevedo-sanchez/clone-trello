import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Logo = (): React.ReactNode => {
	return (
		<Link href='/'>
			<div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
				<Image src='/logo.png' alt='Logo' width='122' height='39' />
			</div>
		</Link>
	);
};
