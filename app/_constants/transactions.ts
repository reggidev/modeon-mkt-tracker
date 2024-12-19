import { TransactionCategory, TransactionPlatform } from '@prisma/client'

export const TRANSACTION_CATEGORY_LABELS = {
  OFFLINE: 'Offline',
  ONLINE: 'Online',
}

export const TRANSACTION_PLATFORM_LABELS = {
  SITE: 'Website',
  EMAIL_MARKETING: 'Email Marketing',
  SOCIAL_MEDIA: 'Redes Sociais',
  ECOMMERCE: 'E-commerce',
  PHYSICAL_STORE: 'Loja Física',
  OUTDOOR: 'Outdoor',
  TELEVISION: 'Televisão',
}

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.OFFLINE,
    label: TRANSACTION_CATEGORY_LABELS.OFFLINE,
  },
  {
    value: TransactionCategory.ONLINE,
    label: TRANSACTION_CATEGORY_LABELS.ONLINE,
  },
]

export const TRANSACTION_PLATFORM_OPTIONS = [
  {
    value: TransactionPlatform.SITE,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.SITE],
  },
  {
    value: TransactionPlatform.EMAIL_MARKETING,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.EMAIL_MARKETING],
  },
  {
    value: TransactionPlatform.SOCIAL_MEDIA,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.SOCIAL_MEDIA],
  },
  {
    value: TransactionPlatform.ECOMMERCE,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.ECOMMERCE],
  },
  {
    value: TransactionPlatform.PHYSICAL_STORE,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.PHYSICAL_STORE],
  },
  {
    value: TransactionPlatform.OUTDOOR,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.OUTDOOR],
  },
  {
    value: TransactionPlatform.TELEVISION,
    label: TRANSACTION_PLATFORM_LABELS[TransactionPlatform.TELEVISION],
  },
]
