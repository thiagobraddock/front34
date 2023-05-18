import iChoveu from '../../../assets/images/projects/iChoveu.svg';
import rtl from '../../../assets/images/projects/rtl.png';
import onlineStore from '../../../assets/images/projects/online-store.svg';
import tunes from '../../../assets/images/projects/tunes.svg';
import wallet from '../../../assets/images/projects/wallet.svg';
import recipesApp from '../../../assets/images/projects/recipes-app.svg';
import starWars from '../../../assets/images/projects/star-wars.svg';
import passwordManager from '../../../assets/images/projects/password-manager.svg';

export const PROJECTS_LIST = [
  {
    title: 'iChoveu',
    image: iChoveu,
    description: `Projeto que aborda funções assíncronas e requisições a API.
    Você irá desenvolver uma aplicação que consulta a API chamada weatherapi e irá exibir a previsão do tempo para a cidade pesquisada.`,
  },
  {
    title: 'Password Manager',
    image: passwordManager,
    description: `Projeto em React com TypeScript desenvolvendo habilidades de controle de estado, eventos em react passagem de props, renderização condicional elevação de estado listagem de componentes de maneira dinâmica.
    Você irá desenvolver uma aplicação que cria e gerencia senhas utilizadas em sites e aplicativos.`,
  },
  {
    title: 'TrybeTunes',
    image: tunes,
    description: `Projeto que aborda efeitos colaterais do React, requisições e rotas com o React Router DOM.
    Você irá desenvolver uma aplicação semelhante ao iTunes, onde terá uma página de login. Após fazer o login você poderá pesquisar por artistas e ver os álbuns e músicas relacionadas a ele. Nele é possível também favoritar músicas e vê-las em uma página separada além de alterar suas informações de usuário.`,
  },
  {
    title: 'React Testing Library',
    image: rtl,
    description: `Projeto em React e TypeScript desenvolvendo habilidades de testes de integração com a biblioteca React Testing Library.
    Você irá realizar testes de integração com a React Testing Library em uma aplicação que simula uma pokedex.`,
  },
  {
    title: 'Online Store',
    image: onlineStore,
    description: `Projeto em grupo, utilizando React e TypeScript para praticar todo conhecimento adquirido até o momento no módulo de Front-end.
    Você irá desenvolver uma loja online, utilizando a API do Mercado Livre, nessa aplicação será possível adicionar e gerenciar produtos no seu carrinho, e preencher um formulário de compra e avaliação dos produtos.`,
  },
  {
    title: 'TrybeWallet',
    image: wallet,
    description: `Projeto em React e TypeScript desenvolvendo habilidades de estado global com Redux .
    Você irá desenvolver uma carteira de controle de gastos pessoais, com conversor de moedas, utilizando a API de câmbio para atualizar os valores de acordo com a cotação do dia. Além disso irá testar sua aplicação utilizando React Testing Library.`,
  },
  {
    title: 'Star Wars - Planets Search',
    image: starWars,
    description: `Projeto em React e TypeScript desenvolvendo habilidades de estado global com Context API com auxilio de hooks customizados.
    Você irá desenvolver uma aplicação que lista planetas do universo Star Wars, utilizando uma API. Nessa aplicação você poderá adicionar diversos filtros de busca para filtrar e ordenar os planetas que deseja. Além disso irá garantir a qualidade do seu código com testes de integração com o React Testing Library.`,
  },
  {
    title: 'Recipes App',
    image: recipesApp,
    description: `Projeto em grupo, utilizando React e TypeScript para praticar todo conhecimento adquirido no módulo de Front-end.
    Você irá desenvolver uma aplicação de receitas, com diversas páginas, como: Login, Comidas, Bebidas, Detalhe da receita, Finalizados, Favoritos e Perfil. Para desenvolver essa aplicação você irá consumir duas APIs utilizando diversos endpoints.`,
  },
];
