'use client'

import { ArrowDownUpIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import UpsertInvestmentDialog from './upsert-investment-dialog'

interface AddInvestmentButtonProps {
  className?: string
}

const AddInvestmentButton = ({ className }: AddInvestmentButtonProps) => {
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
      <UpsertInvestmentDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  )
}

export default AddInvestmentButton
