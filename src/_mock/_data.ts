// Pronto

import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _postTitles,
  _description,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatar/avatar-25.webp',
};

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
    ][index] || 'UI Designer',
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    'Seca Severa',
    'Queimadas Florestais',
    'Alagamentos e Transbordamento de Rios',
    'Riscos de Acidentes com Barragens',
    'Tempestade de Granizo',
  ][index],
  type: `order2`,
  time: _times(index),
}));

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Nova evacuação em Goiás',
    description: 'Foi emitido um alerta para a evacuação de áreas de risco',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(0),
    isUnRead: true,
  }, 
  {
    id: _id(2),
    title: _fullName(2),
    description: 'respondeu ao seu comentário no post da Comunidade',
    avatarUrl: '/assets/images/avatar/avatar-6.webp',
    type: 'friend-interactive',
    postedAt: _times(10),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'Alerta de tempestade em Goiás',
    description: 'Aguarde informações sobre a situação climática',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(10),
    isUnRead: false,
  },
  {
    id: _id(4),
    title: 'Possível Queimada na região',
    description: 'A situação está já sendo monitorada',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(11),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: _fullName(10),
    description: 'comentou em seu último post',
    avatarUrl: '/assets/images/avatar/avatar-10.webp',
    type: 'friend-interactive',
    postedAt: _times(5),
    isUnRead: false,
  },
];
