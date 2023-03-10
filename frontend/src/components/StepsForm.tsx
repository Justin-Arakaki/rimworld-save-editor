import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';

export default function StepsForm() {
  const [defaultsFile, setDefaultsDocFile] = useState(null);
  const [saveFile, setSaveFile] = useState(null);

  const cardProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: 3
  };
  const buttonProps = { mt: 2, width: '40%' }

  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2
      }}
    >
      <Card sx={cardProps}>
        <Typography variant='h2'>
          Step 1: Upload save file
        </Typography>
        <Typography variant='body1'>
          Typically found in C:\users\&lt;username&gt;\AppData\LocalLow\Ludeon Studios\RimWorld by Ludeon Studios\Saves folder as .rws file type on Windows
        </Typography>
        <Box mt={2}>
          <Button variant="contained" component="label" sx={buttonProps}>
            Upload Save File
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
          <Button />
        </Box>
      </Card>
      <Card sx={cardProps}>
        <Typography variant='h2'>
          Step 2: Upload defaults file
        </Typography>
        <Typography variant='body1'>
          Create a defaults file and upload. See example here.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" component="label" sx={buttonProps}>
            Upload Defaults File
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
        </Box>
      </Card>
      <Card sx={cardProps}>
        <Typography variant='h2'>
          Step 3: Download file
        </Typography>
        <Typography variant='body1'>
          Place save file in your saves
        </Typography>
        <Box mt={2}>
          <Button variant="contained" component="label" sx={buttonProps}>
            Download
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}
