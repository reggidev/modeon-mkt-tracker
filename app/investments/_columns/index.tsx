'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

import { TRANSACTION_PLATFORM_LABELS } from '@/app/_constants/transactions'

import DeleteTransactionButton from '../_components/delete-transaction-button'
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
    cell: ({ row: { original: transaction } }) => {
      const platform = TRANSACTION_PLATFORM_LABELS[transaction.platform]
      return <div className="w-[125px]">{platform}</div>
    },
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) => {
      const date = new Date(transaction.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      return <div className="w-[185px]">{date}</div>
    },
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
        <div className="w-24 space-x-2">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton transactionId={transaction.id} />
        </div>
      )
    },
  },
]
