// Pronto

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Histórico',
    path: '/historico',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Mapa',
    path: '/mapa',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Comunidade',
    path: '/comunidade',
    icon: icon('ic-user'),
  },
  {
    title: 'Suporte',
    path: '/suporte',
    icon: icon('ic-lock'),
  }
];
