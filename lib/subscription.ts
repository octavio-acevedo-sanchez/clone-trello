import { auth } from '@clerk/nextjs';
import { db } from '@/lib/db';

const DAY_IN_MS = 84_400_000;

export const checkSubscription = async (): Promise<boolean> => {
	const { orgId } = auth();

	if (!orgId) {
		return false;
	}

	const orgSubscription = await db.orgSubscription.findUnique({
		where: {
			orgId
		},
		select: {
			stripeCustomerId: true,
			stripeCurrentPeriodEnd: true,
			stripePriceId: true,
			stripeSubscriptionId: true
		}
	});

	if (!orgSubscription) {
		return false;
	}

	const isValid =
		orgSubscription.stripePriceId &&
		(orgSubscription.stripeCurrentPeriodEnd?.getTime() ?? 0) + DAY_IN_MS >
			Date.now();

	return !!isValid;
};
