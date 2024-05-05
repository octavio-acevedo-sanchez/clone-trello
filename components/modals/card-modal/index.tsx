'use client';

import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useCardModal } from '@/hooks/use-card-modal';
import { type CardWithList } from '@/types';
import { fetcher } from '@/lib/fetcher';
import { Header } from './header';

export const CardModal = (): React.ReactNode => {
	const id = useCardModal(state => state.id);
	const isOpen = useCardModal(state => state.isOpen);
	const onClose = useCardModal(state => state.onClose);

	const { data: cardData } = useQuery<CardWithList>({
		queryKey: ['card', id],
		queryFn: async () => await fetcher(`/api/cards/${id}`)
	});

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				{!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
				{cardData?.title}
			</DialogContent>
		</Dialog>
	);
};
