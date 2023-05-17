import iChoveu from '../../../assets/images/projects/iChoveu.svg';

function Projects() {
  return (
    <section id="overview" className="app-info section">
      <div className="container">
        <div className="info-one">
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
                  Você vai construir uma aplicação que consulta a API
                  {' '}
                  <strong>weatherapi</strong>
                  {' '}
                  e exibe a previsão do tempo para a cidade pesquisada.
                </p>
                <div className="button">
                  <a href="" className="btn">Get Started</a>
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
                {/* <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ phone } /> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">

              <div
                className="info-text wow fadeInRight"
                data-wow-delay=".5s"
                style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }
              >
                <div className="main-icon">
                  <i className="lni lni-layout" />
                </div>
                <h2>Seamless Loyalty</h2>
                <p>
                  Collaborate over projects with your team and clients optimised for mobile and tablet
                  don&#39;t
                  let slow page speeds drive our innovative platform empowers anyone to convert clicks
                  ou&#39;ll
                  publish your first landing page in minutes.
                </p>
                <div className="button">
                  <a href="" className="btn">Get Started</a>
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
