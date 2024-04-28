import type { z } from 'zod';

export type FieldErrors<T> = {
	[K in keyof T]?: string[];
};

export interface ActionState<TInput, TOutput> {
	fieldErrors?: FieldErrors<TInput>;
	error?: string | null;
	data?: TOutput;
}

export const createSafeAction = <TInput, TOutput>(
	schema: z.Schema<TInput>,
	handler: (validateData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
	return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
		const validationResult = schema.safeParse(data);
		if (!validationResult.success) {
			return {
				fieldErrors: validationResult.error.flatten()
					.fieldErrors as FieldErrors<TInput>
			};
		}

		return await handler(validationResult.data);
	};
};
