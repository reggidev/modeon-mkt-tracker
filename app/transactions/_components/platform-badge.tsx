import { type Transaction, TransactionCategory } from '@prisma/client'
import { CircleIcon } from 'lucide-react'

import { Badge } from '@/app/_components/ui/badge'

interface TransactionCategoryBadgeProps {
  transaction: Transaction
}

const TransactionCategoryBadge = ({
  transaction,
}: TransactionCategoryBadgeProps) => {
  if (transaction.category === TransactionCategory.ONLINE) {
    return (
      <Badge className="bg-primary/70 font-bold hover:bg-primary/50 dark:text-white">
        <CircleIcon className="mr-2 fill-primary text-primary" size={10} />
        Online
      </Badge>
    )
  }
  return (
    <Badge className="bg-black/70 font-bold hover:bg-black/50 dark:bg-white/70 dark:hover:bg-white/50">
      <CircleIcon
        className="mr-2 fill-black text-black dark:fill-white dark:text-white"
        size={10}
      />
      Offline
    </Badge>
  )
}

export default TransactionCategoryBadge
