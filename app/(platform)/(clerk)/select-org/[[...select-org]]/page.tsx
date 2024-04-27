import { OrganizationList } from '@clerk/nextjs';

export default function CreateOrganizationPage(): React.ReactNode {
	return (
		<OrganizationList
			hidePersonal
			afterSelectOrganizationUrl='/organization/:id'
			afterCreateOrganizationUrl='/organization/:id'
		/>
	);
}
