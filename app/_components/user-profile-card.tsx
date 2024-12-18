import { useUser } from '@clerk/nextjs'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserProfileCard = () => {
  const { user } = useUser()

  return (
    <div className="flex w-full items-center gap-3 px-2">
      {user?.imageUrl ? (
        <Avatar>
          <AvatarImage src={user.imageUrl} alt={user.fullName || 'Avatar'} />
          <AvatarFallback>{user?.firstName?.charAt(0) || 'U'}</AvatarFallback>
        </Avatar>
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
          <span className="text-lg font-medium">
            {user?.firstName?.charAt(0) || 'U'}
          </span>
        </div>
      )}

      <div>
        <p>{user?.fullName || 'Usuário'}</p>
        <p className="text-sm text-gray-400">
          {user?.primaryEmailAddress?.emailAddress || 'Sem e-mail'}
        </p>
      </div>
    </div>
  )
}

export default UserProfileCard
