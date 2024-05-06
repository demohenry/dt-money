import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
	TransactionsContainer,
	TransactionsTable,
	PriceHighlight,
} from './styles';

export function Transactions() {
	return (
		<>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						<tr>
							<td>Desenvolvimento do site</td>
							<td>
								<PriceHighlight variant='income'>R$ 12.000.00</PriceHighlight>
							</td>
							<td>Venda</td>
							<td>13/04/2022</td>
						</tr>
						<tr>
							<td>Hamburguer</td>
							<td>
								<PriceHighlight variant='outcome'>-R$ 150,00</PriceHighlight>
							</td>
							<td>Alimentação</td>
							<td>03/04/2022</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</>
	);
}
