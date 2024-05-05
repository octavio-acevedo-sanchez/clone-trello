import type { z } from 'zod';
import type { Card } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import type { DeleteCard } from './schema';

export type InputType = z.infer<typeof DeleteCard>;
export type ReturnType = ActionState<InputType, Card>;
