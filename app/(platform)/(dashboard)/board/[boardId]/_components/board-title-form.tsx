'use client';

import { type ElementRef, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Board } from '@prisma/client';
import { FormInput } from '@/components/form/form-input';
import { updateBoard } from '@/actions/update-board';
import { useAction } from '@/hooks/use-action';
import { toast } from 'sonner';

interface BoardTitleFormProps {
	data: Board;
}

export const BoardTitleForm = ({
	data
}: BoardTitleFormProps): React.ReactNode => {
	const { execute } = useAction(updateBoard, {
		onSuccess: data => {
			toast.success(`Board "${data.title}!"`);
			setTitle(data.title);
			disableEditing();
		},
		onError: error => {
			toast.error(error);
		}
	});

	const formRef = useRef<ElementRef<'form'>>(null);
	const inputRef = useRef<ElementRef<'input'>>(null);

	const [title, setTitle] = useState(data.title);
	const [isEditing, setIsEditing] = useState(false);

	const disableEditing = (): void => {
		setIsEditing(false);
	};

	const enableEditing = (): void => {
		setIsEditing(true);
		setTimeout(() => {
			inputRef.current?.focus();
			inputRef.current?.select();
		});
	};

	const onSubmit = (formData: FormData): void => {
		const title = formData.get('title');

		execute({ title, id: data.id });
	};

	const onBlur = (): void => {
		formRef.current?.requestSubmit();
	};

	if (isEditing) {
		return (
			<form
				action={onSubmit}
				className='flex items-center gap-x-2'
				ref={formRef}
			>
				<FormInput
					ref={inputRef}
					id='title'
					onBlur={onBlur}
					defaultValue={title}
					className='text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none'
				/>
			</form>
		);
	}

	return (
		<Button
			onClick={enableEditing}
			className='font-bold text-lg h-auto w-auto p-1 px-2'
			variant='transparent'
		>
			{title}
		</Button>
	);
};
