'use client'

import { ArrowDownUpIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import UpsertTransactionDialog from './upsert-transaction-dialog'

interface AddTransactionButtonProps {
  className?: string
}

const AddTransactionButton = ({ className }: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button
        className={`font-bold ${className}`}
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Investimento
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  )
}

export default AddTransactionButton
