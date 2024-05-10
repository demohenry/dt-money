import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import {
	CloseButton,
	Content,
	Overlay,
	TransactionButton,
	TransactionType,
} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

interface NewTransactionModalProps {
	onTransactionCreated: () => void;
}

export function NewTransactionModal({
	onTransactionCreated,
}: NewTransactionModalProps) {
	const { createTransaction } = useContext(TransactionsContext);

	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: {
			type: 'income',
		},
	});

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		const { description, price, category, type } = data;

		await createTransaction({
			description,
			price,
			category,
			type,
		});

		reset();
		onTransactionCreated();
	}

	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>Nova transação</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						type='text'
						autoComplete='off'
						placeholder='Desrição'
						required
						{...register('description')}
					/>
					<input
						type='number'
						placeholder='Preço'
						required
						{...register('price', { valueAsNumber: true })}
					/>
					<input
						type='text'
						placeholder='Categoria'
						required
						{...register('category')}
					/>

					<Controller
						control={control}
						name='type'
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionButton variant='income' value='income'>
										<ArrowCircleUp size={24} />
										Entrada
									</TransactionButton>
									<TransactionButton variant='outcome' value='outcome'>
										<ArrowCircleDown size={24} />
										Saída
									</TransactionButton>
								</TransactionType>
							);
						}}
					/>

					<button type='submit' disabled={isSubmitting}>
						Cadastrar
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
