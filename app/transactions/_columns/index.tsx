'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { TrashIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { TRANSACTION_PLATFORM_LABELS } from '@/app/_constants/transactions'

import EditTransactionButton from '../_components/edit-transaction-button'
import TransactionCategoryBadge from '../_components/platform-badge'

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) => (
      <TransactionCategoryBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: 'platform',
    header: 'Plataforma',
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PLATFORM_LABELS[transaction.platform],
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-2">
          <EditTransactionButton transaction={transaction} />
          <Button variant="outline" size="icon">
            <TrashIcon />
          </Button>
        </div>
      )
    },
  },
]
