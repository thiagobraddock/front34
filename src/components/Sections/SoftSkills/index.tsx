import {
  Atom,
  Code,
  FileTsx,
  Textbox,
  Browser,
  FileCss,
} from '@phosphor-icons/react';

import './index.css';

function SoftSkills() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="section-title" style={ { width: '100%' } }>
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              SoftSkills e Carreira
            </h3>

            <p className="wow fadeInUp" data-wow-delay=".6s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row"
      >
        <div className="col-lg-4 col-md-6 col-12">
          <div
            className="single-feature wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div
              className="iconBg"
            >
              <Atom />
            </div>
            <h3 className="mt-3">React</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
            <div
              className="iconBg"
            >
              <Code />
            </div>
            <h3 className="mt-3">React Hooks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
            <div
              className="iconBg"
            >
              <FileTsx />
            </div>
            <h3 className="mt-3">TypeScript + Vite</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
            <div
              className="iconBg"
            >
              <Textbox />
            </div>
            <h3 className="mt-3">Formulários</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
            <div
              className="iconBg"
            >
              <Browser />
            </div>
            <h3 className="mt-3">React Router</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
            <div
              className="iconBg"
            >
              <FileCss />
            </div>
            <h3 className="mt-3">Estilização</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SoftSkills;
