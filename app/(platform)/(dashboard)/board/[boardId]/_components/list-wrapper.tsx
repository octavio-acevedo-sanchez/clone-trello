interface ListWrapperProps {
	children: React.ReactNode;
}

export const ListWrapper = ({
	children
}: ListWrapperProps): React.ReactNode => {
	return <li className='shrink-0 h-full w-[272px] select-none'>{children}</li>;
};
