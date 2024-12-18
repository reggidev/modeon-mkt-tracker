'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

import TransactionPlatformBadge from '../_components/platform-badge'

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
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
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
  },
  {
    accessorKey: 'actions',
    header: '',
  },
]
