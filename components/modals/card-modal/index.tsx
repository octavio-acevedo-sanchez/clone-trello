'use client';

import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useCardModal } from '@/hooks/use-card-modal';
import { type CardWithList } from '@/types';
import { fetcher } from '@/lib/fetcher';
import { Header } from './header';
import { Description } from './description';
import { Actions } from './actions';
import { Activity } from './activity';
import { type AuditLog } from '@prisma/client';

export const CardModal = (): React.ReactNode => {
	const id = useCardModal(state => state.id);
	const isOpen = useCardModal(state => state.isOpen);
	const onClose = useCardModal(state => state.onClose);

	const { data: cardData } = useQuery<CardWithList>({
		queryKey: ['card', id],
		queryFn: async () => await fetcher(`/api/cards/${id}`)
	});

	const { data: auditLogsData } = useQuery<AuditLog[]>({
		queryKey: ['card-logs', id],
		queryFn: async () => await fetcher(`/api/cards/${id}/logs`)
	});

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				{!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
				<div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
					<div className='col-span-3'>
						<div className='w-full space-y-6'>
							{!cardData ? (
								<Description.Skeleton />
							) : (
								<Description data={cardData} />
							)}
							{!auditLogsData ? (
								<Activity.Skeleton />
							) : (
								<Activity items={auditLogsData} />
							)}
						</div>
					</div>
					{!cardData ? <Actions.Skeleton /> : <Actions data={cardData} />}
				</div>
			</DialogContent>
		</Dialog>
	);
};
