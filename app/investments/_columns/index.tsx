'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

import { INVESTMENT_PLATFORM_LABELS } from '@/app/_constants/investments'

import DeleteInvestmentButton from '../_components/delete-investment-button'
import EditInvestmentButton from '../_components/edit-investment-button'
import InvestmentCategoryBadge from '../_components/platform-badge'

export const investmentColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) => (
      <InvestmentCategoryBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: 'platform',
    header: 'Plataforma',
    cell: ({ row: { original: transaction } }) => {
      const platform = INVESTMENT_PLATFORM_LABELS[transaction.platform]
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
          <EditInvestmentButton transaction={transaction} />
          <DeleteInvestmentButton transactionId={transaction.id} />
        </div>
      )
    },
  },
]
