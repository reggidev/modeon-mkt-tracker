import { TransactionCategory, TransactionPlatform } from '@prisma/client'

export const INVESTMENT_CATEGORY_LABELS = {
  OFFLINE: 'Offline',
  ONLINE: 'Online',
}

export const INVESTMENT_PLATFORM_LABELS = {
  SITE: 'Website',
  EMAIL_MARKETING: 'Email Marketing',
  SOCIAL_MEDIA: 'Redes Sociais',
  ECOMMERCE: 'E-commerce',
  PHYSICAL_STORE: 'Loja Física',
  OUTDOOR: 'Outdoor',
  TELEVISION: 'Televisão',
}

export const INVESTMENT_PAYMENT_METHOD_ICONS = {
  [TransactionPlatform.SITE]: 'website.svg',
  [TransactionPlatform.EMAIL_MARKETING]: 'mail.svg',
  [TransactionPlatform.SOCIAL_MEDIA]: 'social-media.svg',
  [TransactionPlatform.ECOMMERCE]: 'ecommerce.svg',
  [TransactionPlatform.PHYSICAL_STORE]: 'store.svg',
  [TransactionPlatform.OUTDOOR]: 'outdoor.svg',
  [TransactionPlatform.TELEVISION]: 'tv.svg',
}

export const INVESTMENT_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.OFFLINE,
    label: INVESTMENT_CATEGORY_LABELS.OFFLINE,
  },
  {
    value: TransactionCategory.ONLINE,
    label: INVESTMENT_CATEGORY_LABELS.ONLINE,
  },
]

export const INVESTMENT_PLATFORM_OPTIONS = [
  {
    value: TransactionPlatform.SITE,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.SITE],
  },
  {
    value: TransactionPlatform.EMAIL_MARKETING,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.EMAIL_MARKETING],
  },
  {
    value: TransactionPlatform.SOCIAL_MEDIA,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.SOCIAL_MEDIA],
  },
  {
    value: TransactionPlatform.ECOMMERCE,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.ECOMMERCE],
  },
  {
    value: TransactionPlatform.PHYSICAL_STORE,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.PHYSICAL_STORE],
  },
  {
    value: TransactionPlatform.OUTDOOR,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.OUTDOOR],
  },
  {
    value: TransactionPlatform.TELEVISION,
    label: INVESTMENT_PLATFORM_LABELS[TransactionPlatform.TELEVISION],
  },
]
