// Pronto

import type { CardProps } from '@mui/material/Card';
import { Box } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';
// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  imageSrc: string;
};

export function AnalyticsConversionRates({ title, subheader, imageSrc, ...other }: Props) {
  const theme = useTheme();

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{position: 'relative'}}>
        <img src={imageSrc} alt="Mapa" style={{width: '100%', height: 'auto'}} />
      </Box>
    </Card>
  );
}
