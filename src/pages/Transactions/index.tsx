import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
	TransactionsContainer,
	TransactionsTable,
	PriceHighlight,
} from './styles';

interface Transactions {
	id: number;
	description: string;
	type: 'income' | 'outcome';
	category: string;
	price: number;
	createAt: string;
}

export function Transactions() {
	const [transactions, setTransactions] = useState<Transactions[]>([]);

	async function loadTransactions() {
		const response = await fetch('http://localhost:8080/transactions');
		const data = await response.json();

		setTransactions(data);
	}

	useEffect(() => {
		loadTransactions();
	}, []);

	return (
		<>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						{transactions.map(
							({ id, description, type, category, price, createAt }) => {
								return (
									<tr key={id}>
										<td>{description}</td>
										<td>
											<PriceHighlight variant={type}>
												{price.toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</PriceHighlight>
										</td>
										<td>{category}</td>
										<td>{createAt}</td>
									</tr>
								);
							}
						)}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</>
	);
}
