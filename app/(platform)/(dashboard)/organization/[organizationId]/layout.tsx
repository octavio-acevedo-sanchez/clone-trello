import { startCase } from 'lodash';
import { OrgControl } from './_components/org-control';
import { auth } from '@clerk/nextjs';

export async function generateMetadata(): Promise<{ title: string }> {
	const { orgSlug } = auth();

	return {
		title: startCase(orgSlug ?? 'organization')
	};
}

const OrganizationLayout = ({
	children
}: {
	children: React.ReactNode;
}): React.ReactNode => {
	return (
		<>
			<OrgControl />
			{children}
		</>
	);
};

export default OrganizationLayout;
