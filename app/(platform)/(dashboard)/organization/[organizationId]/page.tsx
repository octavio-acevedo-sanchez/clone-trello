import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';

const Test = (): React.ReactNode => {
	return (
		<div>
			<form action={create}>
				<input
					id='title'
					name='title'
					placeholder='Enter a borad title'
					required
					className='border-black border p-1'
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default Test;
//
