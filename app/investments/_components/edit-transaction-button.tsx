'use client'

import type { Transaction } from '@prisma/client'
import { PencilIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import UpsertTransactionDialog from '@/app/_components/upsert-transaction-dialog'

interface EditTransactionButtonProps {
  transaction: Transaction
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
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
      <UpsertTransactionDialog
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

export default EditTransactionButton
