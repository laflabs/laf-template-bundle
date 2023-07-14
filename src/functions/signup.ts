import { handle } from '@/exceptions/handler';
import { signupSchema } from '@/schemas/signup';

export default async function (ctx: FunctionContext) {
  try {
    const dto = signupSchema.parse(ctx.body);
    return { data: dto };
  } catch (error) {
    return handle(error);
  }
}
