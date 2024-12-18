'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { PencilIcon, TrashIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { TRANSACTION_CATEGORY_LABELS } from '@/app/_constants/transactions'

import TransactionPlatformBadge from '../_components/platform-badge'

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: 'platform',
    header: 'Plataforma',
    cell: ({ row: { original: transaction } }) => (
      <TransactionPlatformBadge transaction={transaction} />
    ),
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
    cell: () => {
      return (
        <div className="space-x-2">
          <Button variant="outline" size="icon">
            <PencilIcon />
          </Button>
          <Button variant="outline" size="icon">
            <TrashIcon />
          </Button>
        </div>
      )
    },
  },
]
