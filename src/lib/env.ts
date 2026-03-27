import { z } from 'zod/v4'

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url().optional(),
})

export const env = envSchema.parse(process.env)
