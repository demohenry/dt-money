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
import { dateFormatter, priceFormatter } from '../../utils/formatter';

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
												{type === 'outcome' && '- '}
												{priceFormatter.format(price)}
											</PriceHighlight>
										</td>
										<td>{category}</td>
										<td>{dateFormatter.format(new Date(createAt))}</td>
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
