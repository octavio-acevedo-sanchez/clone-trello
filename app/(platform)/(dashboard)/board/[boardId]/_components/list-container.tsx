'use client';

import type { ListWithCards } from '@/types';
import { ListForm } from './list-form';

interface ListContainerProps {
	data: ListWithCards[];
	boardId: string;
}

export const ListContainer = ({
	data,
	boardId
}: ListContainerProps): React.ReactNode => {
	return (
		<ol>
			<ListForm />
			<div className='flex-shrink-0 w-1' />
		</ol>
	);
};
