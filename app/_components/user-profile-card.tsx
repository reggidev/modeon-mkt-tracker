'use client'

import { useUser } from '@clerk/nextjs'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface UserProfileCardProps {
  isCollapsed: 'expanded' | 'collapsed'
}

const UserProfileCard = ({ isCollapsed }: UserProfileCardProps) => {
  const { user } = useUser()

  return (
    <div className="flex w-full items-center gap-3">
      {user?.imageUrl ? (
        <Avatar>
          <AvatarImage src={user.imageUrl} alt={user.fullName || 'Avatar'} />
          <AvatarFallback>{user?.firstName?.charAt(0) || 'U'}</AvatarFallback>
        </Avatar>
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
          <span className="text-lg font-medium">
            {user?.firstName?.charAt(0) || ''}
          </span>
        </div>
      )}

      {isCollapsed === 'expanded' && (
        <div>
          <div>
            <p className="mb-0.5 text-sm font-bold leading-none">
              {user?.fullName || 'Usuário'}
            </p>
            <p className="text-sm leading-none text-gray-400">
              {user?.primaryEmailAddress?.emailAddress
                ? user.primaryEmailAddress.emailAddress.length > 20
                  ? `${user.primaryEmailAddress.emailAddress.slice(0, 20)}...`
                  : user.primaryEmailAddress.emailAddress
                : 'Sem e-mail'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfileCard
