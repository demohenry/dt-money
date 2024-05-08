import { useContext } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import {
	TransactionsContainer,
	TransactionsTable,
	PriceHighlight,
} from './styles';

export function Transactions() {
	const { transactions } = useContext(TransactionsContext);

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
