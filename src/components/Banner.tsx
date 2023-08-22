import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Banner() {
	return (
		<Container
			maxWidth="md"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 2,
				my: 8,
			}}
		>
			<Typography variant="h1" textAlign="center">
				Rimworld Save Editor
			</Typography>
			<Typography variant="body1" textAlign="center">
				Rimworld Save Editor modifies your save file to have the default
				settings that you choose. No more repetitive clicking at the beginning
				of your games.
			</Typography>
		</Container>
	);
}
