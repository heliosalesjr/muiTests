import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './components/ProTip';
import Copyright from './components/Copyright';
import ControlledAccordions from './components/ControlledAccordions';
import BasicCard from './components/BasicCard';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Vamos tirar suas dúvidas sobre a vida!
        </Typography>
        
        
        <BasicCard text='Palavrinha do Dia' wordz='bonitinha'/>

        <BasicCard text='Palavrinha da Tarde' wordz='querida!'/>

        <BasicCard text='Palavrinha da Noite' wordz='belissima'/>
        
        
        <Copyright />
      </Box>
    </Container>
  );
}