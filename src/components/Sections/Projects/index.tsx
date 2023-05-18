import iChoveu from '../../../assets/images/projects/iChoveu.svg';
import rtl from '../../../assets/images/projects/rtl.png';
import onlineStore from '../../../assets/images/projects/online-store.svg';
import tunes from '../../../assets/images/projects/tunes.svg';
import wallet from '../../../assets/images/projects/wallet.svg';
import passwordManager from '../../../assets/images/projects/password-manager.svg';

function Projects() {
  return (
    <section id="overview" className="app-info section">
      <div className="container">
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">

              <div className="info-text wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                {/* <div className="main-icon">
                  <i className="lni lni-inbox" />
                </div> */}
                <h2>iChoveu</h2>
                <p>
                  Projeto que aborda funções assíncronas e requisições a API.
                  {' '}
                  <br />
                  {' '}
                  Você irá desenvolver uma aplicação que consulta a API
                  {' '}
                  <strong>weatherapi</strong>
                  {' '}
                  e exibe a previsão do tempo para a cidade pesquisada.
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInRight" data-wow-delay=".5s" style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2327635917" src={ iChoveu } />
              </div>
            </div>
          </div>
        </div>
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ passwordManager } />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">

              <div
                className="info-text wow fadeInRight"
                data-wow-delay=".5s"
                style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }
              >
                <h2>Password Manager</h2>
                <p>
                  Projeto em
                  {' '}
                  <strong>React</strong>
                  {' '}
                  com
                  {' '}
                  <strong>TypeScript</strong>
                  {' '}
                  desenvolvendo habilidades de controle de estado, eventos em react passagem de props, renderização condicional elevação de estado listagem de componentes de maneira dinâmica.
                  {' '}
                  <br />
                  Você irá desenvolver uma aplicação que cria e gerencia senhas utilizadas em sites e aplicativos.
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-text wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                <h2>Trybe Tunes</h2>
                <p>
                  Projeto que aborda efeitos colaterais do
                  {' '}
                  <strong>React</strong>
                  , rotas e requisições.
                  {' '}
                  <br />
                  {' '}
                  Você irá desenvolver uma aplicação semelhante ao iTunes, onde terá uma página de login. Após fazer o login você poderá pesquisar por artistas e ver os álbuns e músicas relacionadas a ele. Nele é possível também favoritar músicas e vê-las em uma página separada além de alterar suas informações de usuário.
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInRight" data-wow-delay=".5s" style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2327635917" src={ tunes } />
              </div>
            </div>
          </div>
        </div>
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ rtl } />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">

              <div
                className="info-text wow fadeInRight"
                data-wow-delay=".5s"
                style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }
              >
                <h2>Testing Library</h2>
                <p>
                  Projeto em
                  {' '}
                  <strong>React</strong>
                  {' '}
                  e
                  {' '}
                  <strong>TypeScript</strong>
                  {' '}
                  desenvolvendo habilidades de testes de integração com a biblioteca
                  {' '}
                  <strong>React Testing Library</strong>
                  .
                  {' '}
                  <br />
                  Você irá realizar testes de integração com a
                  {' '}
                  <strong>React Testing Library</strong>
                  {' '}
                  em uma aplicação que simula uma pokedex.
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-text wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                <h2>Online Store</h2>
                <p>
                  Projeto em grupo, utilizando
                  {' '}
                  <strong>React</strong>
                  {' '}
                  e
                  {' '}
                  <strong>TypeScript</strong>
                  {' '}
                  para praticar todo conhecimento adquirido até o momento no módulo de Front-end.
                  {' '}
                  <br />
                  Você irá desenvolver uma loja online, utilizando a API do Mercado Livre, nessa aplicação será possível adicionar e gerenciar produtos no seu carrinho, e preencher um formulário de compra e avaliação dos produtos.
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInRight" data-wow-delay=".5s" style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2327635917" src={ onlineStore } />
              </div>
            </div>
          </div>
        </div>
        <div className="info-one style2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
                <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ wallet } />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">

              <div
                className="info-text wow fadeInRight"
                data-wow-delay=".5s"
                style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }
              >
                <h2>Wallet</h2>
                <p>
                  Projeto em
                  {' '}
                  <strong>React</strong>
                  e
                  {' '}
                  <strong>TypeScript</strong>
                  {' '}
                  desenvolvendo habilidades de estado global com
                  {' '}
                  <strong>Redux</strong>
                  .
                  <br />
                  Você irá desenvolver uma carteira de controle de gastos pessoais, com conversor de moedas, utilizando a API de câmbio para atualizar os valores de acordo com a cotação do dia. Além disso irá testar sua aplicação utilizando
                  {' '}
                  <strong>React Testing Library</strong>
                </p>
                <div className="button">
                  <a href="" className="btn">Iniciar</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
