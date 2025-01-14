import { TrashIcon } from 'lucide-react'
import { toast } from 'sonner'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app/_components/ui/alert-dialog'
import { Button } from '@/app/_components/ui/button'

import { deleteInvestment } from '../_actions/delete-investment'

interface DeleteInvestmentButtonProps {
  transactionId: string
}

const DeleteInvestmentButton = ({
  transactionId,
}: DeleteInvestmentButtonProps) => {
  const handleConfirmDeleteClick = async () => {
    try {
      await deleteInvestment({ transactionId })
      toast.success('Investimento deletado com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar investimento')
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você realmente deseja deletar esse investimento?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDeleteClick}>
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteInvestmentButton
