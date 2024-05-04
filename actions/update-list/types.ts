import type { z } from 'zod';
import type { List } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import type { UpdateList } from './schema';

export type InputType = z.infer<typeof UpdateList>;
export type ReturnType = ActionState<InputType, List>;
