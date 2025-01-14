import { z } from 'zod'

export const deleteInvestmentSchema = z.object({
  transactionId: z.string().uuid(),
})

export type DeleteInvestmentSchema = z.infer<typeof deleteInvestmentSchema>
