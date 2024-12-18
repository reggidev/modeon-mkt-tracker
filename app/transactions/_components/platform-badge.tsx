import { type Transaction, TransactionPlatform } from '@prisma/client'
import { CircleIcon } from 'lucide-react'

import { Badge } from '@/app/_components/ui/badge'

interface TransactionPlatformBadgeProps {
  transaction: Transaction
}

const TransactionPlatformBadge = ({
  transaction,
}: TransactionPlatformBadgeProps) => {
  if (transaction.platform === TransactionPlatform.INSTAGRAM) {
    return (
      <Badge className="bg-purple-500/70 font-bold hover:bg-purple-500/50 dark:text-white">
        <CircleIcon
          className="mr-2 fill-purple-500 text-purple-500"
          size={10}
        />
        Instagram
      </Badge>
    )
  }
  if (transaction.platform === TransactionPlatform.FACEBOOK) {
    return (
      <Badge className="bg-blue-500/70 font-bold hover:bg-blue-500/50 dark:text-white">
        <CircleIcon className="mr-2 fill-blue-500 text-blue-500" size={10} />
        Facebook
      </Badge>
    )
  }
  return (
    <Badge className="bg-black/70 font-bold hover:bg-black/50 dark:bg-white/70 dark:hover:bg-white/50">
      <CircleIcon
        className="mr-2 fill-black text-black dark:fill-white dark:text-white"
        size={10}
      />
      Web
    </Badge>
  )
}

export default TransactionPlatformBadge
