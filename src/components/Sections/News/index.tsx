import {
  Atom,
  Code,
  FileTsx,
  Textbox,
  Browser,
  FileCss,
} from '@phosphor-icons/react';

function News() {
  return (
    <section id="news" className="features section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Novidades
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                O módulo de Front-end está melhorando a cada dia!
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                A Turma 32 começa com muitas novidades no módulo, tecnologias
                novas, projetos novos e muita, mas muita prática.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={ {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          } }
        >
          <div style={ { padding: 0 } }>
            <div
              style={ { height: '100%' } }
              className="single-feature wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <Atom style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>React</h3>
              <p>A biblioteca front-end mais utilizada do mundo está aqui. Aprenderemos como podemos usá-la para construir aplicações</p>
            </div>
          </div>
          <div style={ { padding: 0 } }>
            <div style={ { height: '100%' } } className="single-feature wow fadeInUp" data-wow-delay=".4s">
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <Code style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>React Hooks</h3>
              <p>
                Hooks é a forma mais moderna de construir aplicações com React,
                e em front-end vamos aprofundar nesta funcionalidade desde a
                segunda sessão.
              </p>
            </div>
          </div>
          <div style={ { padding: 0 } }>
            <div style={ { height: '100%' } } className="single-feature wow fadeInUp" data-wow-delay=".6s">
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <FileTsx style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>TypeScript + Vite</h3>
              <p>
                Iremos trabalhar com TypeScript e Vite, duas tecnologias que estão em alta no mercado e que vão te ajudar
                a construir aplicações mais robustas e performáticas.
              </p>
            </div>
          </div>
          <div style={ { padding: 0 } }>
            <div style={ { height: '100%' } } className="single-feature wow fadeInUp" data-wow-delay=".2s">
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <Textbox style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>Formulários</h3>
              <p>
                Iremos mergulhar na construção de formulários e validação de campos no React, adquirindo habilidades
                essenciais para criar interações dinâmicas e seguras em nossas aplicações.
              </p>
            </div>
          </div>
          <div style={ { padding: 0 } }>
            <div style={ { height: '100%' } } className="single-feature wow fadeInUp" data-wow-delay=".4s">
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <Browser style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>React Router</h3>
              <p>
                No módulo React Router, aprenderemos a criar rotas dinâmicas
                para nossa aplicação, permitindo a navegação entre diferentes componentes e páginas de forma simples e eficiente. Vamos construir uma experiência de usuário imersiva!
              </p>
            </div>
          </div>
          <div style={ { padding: 0 } }>
            <div style={ { height: '100%' } } className="single-feature wow fadeInUp" data-wow-delay=".6s">
              <div
                style={ {
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB700',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0px 4px 6px #0000002a',
                } }
              >
                <FileCss style={ { width: 24, height: 24 } } />
              </div>
              <h3 style={ { marginTop: 30 } }>Estilização</h3>
              <p>
                Vamos aprender a aplicar estilos personalizados e explorar técnicas avançadas para deixar suas aplicações visualmente deslumbrantes e
                consistentes. Vamos elevar a estilização das nossas aplicações React a um novo nível!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
