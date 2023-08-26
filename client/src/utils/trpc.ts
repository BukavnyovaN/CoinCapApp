import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouter } from '../../../common/trpc-router.type'; 
 
export const trpc = createTRPCReact<TrpcRouter>();