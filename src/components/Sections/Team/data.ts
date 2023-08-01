import { TeamMemberCardProps } from '../../TeamMemberCard';
import braddock from '../../../assets/images/members/braddock.png';
import teph from '../../../assets/images/members/teph.png';
import joao from '../../../assets/images/members/joao.png';
import filipe from '../../../assets/images/members/filipe.png';
import dani from '../../../assets/images/members/dani.png';

type TeamMerberData = TeamMemberCardProps[];

export const data: TeamMerberData = [
  {
    name: 'Felipe Trindade',
    teamRole: 'Coordenação',
    imgSrc: 'https://ca.slack-edge.com/TM13XHBBQ-U044GBYRYAJ-7be4bc859dba-512',
    linkedinUrl: 'https://www.linkedin.com/in/felipetrindade/',
    githubUrl: 'https://github.com/ftrindade87',
  },
  {
    name: 'Stéphanie "Teph" Moraes',
    teamRole: 'Facilitação',
    imgSrc: teph,
    linkedinUrl: 'https://www.linkedin.com/in/stephaniemoraes/',
    goodreadsUrl: 'https://www.goodreads.com/user/show/161335548-st-phanie-santos',
  },
  {
    name: 'Thiago "Braddock"',
    teamRole: 'Especialista',
    imgSrc: braddock,
    linkedinUrl: 'https://www.linkedin.com/in/profthiago/',
    githubUrl: 'https://github.com/thiagobraddock',
    // instagramUrl: 'https://www.instagram.com/profthiago/',
    twitterUrl: 'https://twitter.com/profthiago',
    youtubeUrl: 'https://youtube.com/programadorcaipira',
  },
  {
    name: 'Danielli "Dani" Olegário',
    teamRole: 'Soft Skills e Carreira',
    imgSrc: dani,
    linkedinUrl: 'https://www.linkedin.com/in/danielliolegario/',
  },
  {
    name: 'Filipe Santana',
    teamRole: 'Instrutor',
    imgSrc: filipe,
    linkedinUrl: 'https://www.linkedin.com/in/filipesantanadev/',
    githubUrl: 'https://github.com/FilipeSkmc',
  },
  {
    name: 'Ivan Rafael',
    teamRole: 'Pessoa Instrutora',
    imgSrc: 'https://ca.slack-edge.com/TM13XHBBQ-U038EHSMVC0-c2758eb7a62d-512',
    linkedinUrl: 'https://www.linkedin.com/in/ivan-rafael/',
    githubUrl: 'https://github.com/IvanRafael-Dev',
    instagramUrl: 'http://instagram.com/ivandolim',
  },
  {
    name: 'João Andrade Junior',
    teamRole: 'Instrutor',
    imgSrc: joao,
    linkedinUrl: 'https://www.linkedin.com/in/joao-andrade-junior/',
    githubUrl: 'https://github.com/joaoAndradeJr',
  },
];