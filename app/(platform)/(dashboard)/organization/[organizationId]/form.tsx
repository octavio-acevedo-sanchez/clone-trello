'use client';

import { createBoard } from '@/actions/create-board';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

import { useAction } from '@/hooks/use-action';

export const Form = (): React.ReactNode => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: data => {
			console.log(data, 'success');
		},
		onError: error => {
			console.error(error);
		}
	});

	console.log(fieldErrors);
	const onSubmit = (formData: FormData): void => {
		const title = formData.get('title') as string;

		execute({ title });
	};

	return (
		<form action={onSubmit}>
			<div className='flex flex-col space-y-2'>
				<FormInput label='Board Title' id='title' errors={fieldErrors} />
				<FormSubmit>Save</FormSubmit>
			</div>
		</form>
	);
};
