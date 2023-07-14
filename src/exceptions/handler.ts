import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const handle = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      status: 400,
      message: fromZodError(error).message,
    };
  }
};
