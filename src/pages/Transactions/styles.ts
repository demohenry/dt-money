import { css, styled } from 'styled-components';

export const TransactionsContainer = styled.main`
	width: 100%;
	max-width: 1220px;
	margin: 4rem auto 0;
	padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
	${({ theme }) => css`
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 0.5rem;
		margin-top: 1.5rem;

		td {
			padding: 1.25rem 2rem;
			background: ${theme['gray-700']};

			&:first-child {
				width: 50%;
				border-top-left-radius: 6px;
				border-bottom-left-radius: 6px;
			}

			&:last-child {
				border-top-right-radius: 6px;
				border-bottom-right-radius: 6px;
			}
		}
	`}
`;

interface PriceHighlightProps {
	variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
	color: ${(props) =>
		props.variant === 'income'
			? props.theme['green-300']
			: props.theme['red-300']};
`;
