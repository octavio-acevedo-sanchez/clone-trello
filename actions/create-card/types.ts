import type { z } from 'zod';
import type { Card } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import type { CreateCard } from './schema';

export type InputType = z.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputType, Card>;
