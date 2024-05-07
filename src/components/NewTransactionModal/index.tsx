import * as Dialog from '@radix-ui/react-dialog';
import {
	CloseButton,
	Content,
	Overlay,
	TransactionButton,
	TransactionType,
} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>Nova transação</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form action=''>
					<input type='text' placeholder='Desrição' required />
					<input type='number' placeholder='Preço' required />
					<input type='text' placeholder='Categoria' required />

					<TransactionType>
						<TransactionButton variant='income' value='income'>
							<ArrowCircleUp size={24} />
							Entrada
						</TransactionButton>
						<TransactionButton variant='outcome' value='outcome'>
							<ArrowCircleDown size={24} />
							Saída
						</TransactionButton>
					</TransactionType>

					<button type='submit'>Cadastrar</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
