'use client'

import type { Transaction } from '@prisma/client'
import { PencilIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import UpsertInvestmentDialog from '@/app/_components/upsert-investment-dialog'

interface EditInvestmentButtonProps {
  transaction: Transaction
}

const EditInvestmentButton = ({ transaction }: EditInvestmentButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertInvestmentDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
          date: new Date(transaction.date),
        }}
        transactionId={transaction.id}
      />
    </>
  )
}

export default EditInvestmentButton
