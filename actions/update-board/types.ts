import type { z } from 'zod';
import type { Board } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import type { UpdateBoard } from './schema';

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
