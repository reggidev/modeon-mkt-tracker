import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionCategory, TransactionPlatform } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { upsertInvestment } from '../_actions/upsert-investment'
import {
  INVESTMENT_CATEGORY_OPTIONS,
  INVESTMENT_PLATFORM_OPTIONS,
} from '../_constants/investments'
import { MoneyInput } from './money-input'
import { Button } from './ui/button'
import { DatePicker } from './ui/date-picker'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'O nome é obrigatório',
  }),
  amount: z
    .number({
      required_error: 'O valor é obrigatório',
    })
    .positive({
      message: 'O valor deve ser positivo',
    }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: 'A categoria é obrigatória',
  }),
  platform: z.nativeEnum(TransactionPlatform, {
    required_error: 'A plataforma é obrigatória',
  }),
  date: z.date({
    required_error: 'A data é obrigatória',
  }),
})

type FormSchema = z.infer<typeof formSchema>

interface UpsertInvestmentDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  transactionId?: string
  defaultValues?: FormSchema
}

const UpsertInvestmentDialog = ({
  isOpen,
  setIsOpen,
  transactionId,
  defaultValues,
}: UpsertInvestmentDialogProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      name: '',
      amount: 10,
      category: TransactionCategory.ONLINE,
      platform: TransactionPlatform.SOCIAL_MEDIA,
      date: new Date(),
    },
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      await upsertInvestment({ ...data, id: transactionId })
      setIsOpen(false)
      form.reset()
      isUpdate
        ? toast.success('Investimento atualizado com sucesso')
        : toast.success('Investimento adicionado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao salvar o investimento')
    }
  }

  const isUpdate = Boolean(transactionId)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) {
          form.reset()
        }
      }}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? 'Atualizar' : 'Adicionar'} Investimento
          </DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="Digite o valor..."
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleciona a categoria..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {INVESTMENT_CATEGORY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plataforma</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a plataforma..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {INVESTMENT_PLATFORM_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">
                {isUpdate ? 'Atualizar' : 'Adicionar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UpsertInvestmentDialog
