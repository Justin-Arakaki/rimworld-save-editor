import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import { styled } from '@mui/material/styles';

// component: React.ElementType must be added for TS not to put out error
const StepCard = styled(Card)<CardProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(0.5),
	padding: theme.spacing(4),
}));
``;
export default StepCard;
