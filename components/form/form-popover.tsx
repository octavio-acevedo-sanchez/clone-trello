'use client';

import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board';

import { type ElementRef, useRef } from 'react';
import { FormInput } from './form-input';
import { FormSubmit } from './form-submit';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { FormPicker } from './form-picker';
import { useRouter } from 'next/navigation';
import { useProModal } from '@/hooks/use-pro-modal';

interface FormPopoverProps {
	children: React.ReactNode;
	side?: 'left' | 'right' | 'top' | 'bottom';
	align?: 'start' | 'center' | 'end';
	slideOffset?: number;
}

export const FormPopover = ({
	children,
	side,
	align,
	slideOffset
}: FormPopoverProps): React.ReactNode => {
	const proModal = useProModal();
	const router = useRouter();
	const closeRef = useRef<ElementRef<'button'>>(null);

	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: data => {
			toast.success('Board created!');
			closeRef.current?.click();
			router.push(`/board/${data.id}`);
		},
		onError: error => {
			toast.error(error);
			proModal.onOpen();
		}
	});

	const onSubmit = (formData: FormData): void => {
		const title = formData.get('title') as string;
		const image = formData.get('image') as string;

		execute({ title, image });
	};

	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent
				align={align}
				className='w-80 pt-3'
				side={side}
				sideOffset={slideOffset}
			>
				<div className='text-sm font-medium text-center text-neutral-600 pb-4'>
					Create board
				</div>
				<PopoverClose ref={closeRef} asChild>
					<Button
						className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
						variant='ghost'
					>
						<X className='h-4 w-4' />
					</Button>
				</PopoverClose>
				<form action={onSubmit} className='space-y-4'>
					<div className='space-y-4'>
						<FormPicker id='image' errors={fieldErrors} />
						<FormInput
							id='title'
							label='Board title'
							type='text'
							errors={fieldErrors}
						/>
					</div>
					<FormSubmit className='w-full'>Create</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	);
};
