import { ActivityItem } from '@/components/activity-item';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

export const ActivityList = async (): Promise<JSX.Element> => {
	const { orgId } = auth();

	if (!orgId) {
		redirect('/select-org');
	}

	const auditLogs = await db.auditLog.findMany({
		where: {
			orgId
		},
		orderBy: { createdAt: 'desc' }
	});

	return (
		<div className='space-y-4 mt-4'>
			<p className='hidden last:block text-xs text-center text-muted-foreground'>
				No activity found inside this organization
			</p>
			{auditLogs.map(log => (
				<ActivityItem key={log.id} data={log} />
			))}
		</div>
	);
};

ActivityList.Skeleton = function ActivityListSkeleton() {
	return (
		<ol className='space-y-4 mt-4'>
			<Skeleton className='w-[80%] h-14' />
			<Skeleton className='w-[50%] h-14' />
			<Skeleton className='w-[70%] h-14' />
			<Skeleton className='w-[80%] h-14' />
			<Skeleton className='w-[75%] h-14' />
		</ol>
	);
};
