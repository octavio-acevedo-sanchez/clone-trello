import type { z } from 'zod';
import type { List } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import type { UpdateListOrder } from './schema';

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
