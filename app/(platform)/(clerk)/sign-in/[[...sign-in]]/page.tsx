import { SignIn } from '@clerk/nextjs';

export default function Page(): React.ReactNode {
	return <SignIn path='/sign-in' />;
}
