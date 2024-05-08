import type { z } from 'zod';

import type { ActionState } from '@/lib/create-safe-action';

import type { StripeRedirect } from './schema';

export type InputType = z.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputType, string>;
