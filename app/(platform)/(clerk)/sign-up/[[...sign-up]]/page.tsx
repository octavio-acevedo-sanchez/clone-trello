import { SignUp } from '@clerk/nextjs';

export default function Page(): React.ReactNode {
	return <SignUp path='/sign-up' />;
}
