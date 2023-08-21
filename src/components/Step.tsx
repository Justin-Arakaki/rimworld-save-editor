import { ChangeEventHandler, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FileButton from './FileButton';
import StepCard from './StepCard';
import CircularProgress from '@mui/material/CircularProgress';

interface TisLife {
	title: string;
	description: string;
	buttonText: string;
	onChange: any;
	onLoading: any;
	isLoading: boolean;
	onClick?: any;
}

export default function Step({
	title,
	description,
	buttonText,
	onChange: handleFileSelect,
	onLoading,
	isLoading,
	onClick,
}: TisLife) {
	const [fileDesc, setFileDesc] = useState({ path: '' });
	let buttonUI = <Typography>{buttonText}</Typography>;
	if (isLoading) {
		buttonUI = <CircularProgress size={20} color="inherit" />;
	}
	const buttonType =
		buttonText !== 'Download' ? (
			<Box>
				<FileButton
					variant="contained"
					component="label"
					size="large"
					disabled={isLoading}
				>
					{buttonUI}
					<input
						hidden
						accept=".xml,.rws"
						type="file"
						onChange={e => {
							if (!e.target.files || e.target.files.length === 0) return;
							handleFileSelect(e.target.files[0]);
							setFileDesc({ path: e.target.files[0].name });
							onLoading(true);
						}}
					/>
				</FileButton>
				<Typography>File: {fileDesc.path}</Typography>
			</Box>
		) : (
			<FileButton
				variant="contained"
				component="label"
				size="large"
				disabled={isLoading}
				onClick={async () => await onClick()}
			>
				{buttonUI}
			</FileButton>
		);

	return (
		<StepCard>
			<Typography variant="h2">{title}</Typography>
			<Typography variant="body1">{description}</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					mt: 2,
				}}
			>
				{buttonType}
			</Box>
		</StepCard>
	);
}
