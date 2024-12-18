import { TransactionCategory, TransactionPlatform } from '@prisma/client'

export const TRANSACTION_CATEGORY_LABELS = {
  MARKETING: 'Marketing',
  PAID_TRAFFIC: 'Tráfego Pago',
}

export const TRANSACTION_PLATFORM_LABELS = {
  FACEBOOK: 'Facebook',
  INSTAGRAM: 'Instagram',
  WEB: 'Web',
}

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.MARKETING,
    label: TRANSACTION_CATEGORY_LABELS.MARKETING,
  },
  {
    value: TransactionCategory.PAID_TRAFFIC,
    label: TRANSACTION_CATEGORY_LABELS.PAID_TRAFFIC,
  },
]

export const TRANSACTION_PLATFORM_OPTIONS = [
  {
    value: TransactionPlatform.FACEBOOK,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.FACEBOOK],
  },
  {
    value: TransactionPlatform.INSTAGRAM,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.INSTAGRAM],
  },
  {
    value: TransactionPlatform.WEB,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.WEB],
  },
]
