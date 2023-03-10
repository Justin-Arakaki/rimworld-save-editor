import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

export default function StepsForm() {
  const [defaultsFile, setDefaultsDocFile] = useState(null);
  const [saveFile, setSaveFile] = useState(null);

  const cardProps = {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      p: 3
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Card {...cardProps}>
        <Typography variant='h2'>
          Step 1: Upload save file
        </Typography>
        <Typography variant='body1'>
          Typically found in C:\users\&lt;username&gt;\AppData\LocalLow\Ludeon Studios\RimWorld by Ludeon Studios\Saves folder as .rws file type on Windows
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            component="label"
          >
            Upload Save File
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
        </Box>
      </Card>
      <Card {...cardProps}>
        <Typography variant='h2'>
          Step 2: Upload defaults file
        </Typography>
        <Typography variant='body1'>
          Create a defaults file and upload. See example here.
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            component="label"
          >
            Upload Defaults File
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
        </Box>
      </Card>
      <Card {...cardProps}>
        <Typography variant='h2'>
          Step 3: Download file
        </Typography>
        <Typography variant='body1'>
          Place save file in your saves
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            component="label"
          >
            Upload Defaults File
            <input hidden accept=".xml,.rws" type="file" />
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}
