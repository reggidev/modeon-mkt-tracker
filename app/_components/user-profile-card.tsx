import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'

const UserProfileCard = () => {
  const { user } = useUser()

  return (
    <div className="flex items-center gap-4 rounded-lg bg-gray-900 p-4 text-white shadow-md">
      {/* Avatar do Usuário */}
      {user?.imageUrl ? (
        <Image
          src={user.imageUrl}
          alt={user.fullName || 'Avatar'}
          width={50}
          height={50}
          className="rounded-full"
        />
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
          <span className="text-lg font-medium">
            {user?.firstName?.charAt(0) || 'U'}
          </span>
        </div>
      )}

      {/* Informações do Usuário */}
      <div>
        <p className="text-lg font-semibold">{user?.fullName || 'Usuário'}</p>
        <p className="text-sm text-gray-400">
          {user?.primaryEmailAddress?.emailAddress || 'Sem e-mail'}
        </p>
      </div>

      {/* Botão de Perfil */}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default UserProfileCard
