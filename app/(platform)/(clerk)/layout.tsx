const ClerkLayout = ({
	children
}: {
	children: React.ReactNode;
}): React.ReactNode => {
	return (
		<div className='h-full flex justify-center items-center'>{children}</div>
	);
};

export default ClerkLayout;
