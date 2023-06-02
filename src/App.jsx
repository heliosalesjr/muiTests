import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Copyright from './components/Copyright';

import BasicCard from './components/BasicCard';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Vamos tirar suas dúvidas sobre a vida!
        </Typography>
        
        
        <BasicCard text='Uma palavra' wordz='samba' definition='dança de roda semelhante ao batuque, com dançarinos solistas e eventual presença da umbigada, difundida em todo o Brasil com variantes coreográficas e de acompanhamento instrumental [O samba urbano carioca foi tb., inicialmente, dança de roda.]'/>

        <BasicCard text='Qualquer palavra' wordz='dor' definition='sensação penosa, desagradável, produzida pela excitação de terminações nervosas sensíveis a esses estímulos, e classificada de acordo com o seu lugar, tipo, intensidade, periodicidade, difusão e caráter.'/>

        <BasicCard text='Outra palavra' wordz='cores' definition='As cores são sensações visuais que nossos olhos captam quando há luz presente. Essas sensações são criadas pelas diferentes faixas luminosas que enxergamos. A origem da palavra "cor" vem do latim (color) e significa "cobrir" ou "ocultar".'/>
        
        
        <Copyright />
      </Box>
    </Container>
  );
}