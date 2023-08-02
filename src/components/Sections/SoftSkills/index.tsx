/* eslint-disable react/no-multi-comp */
import {
  Lightbulb,
  Brain,
  UsersFour,
  Handshake,
  LinkedinLogo,
  GithubLogo,
  GitBranch,
  PresentationChart,
} from '@phosphor-icons/react';

import './index.css';

const skillData = [
  { icon: Lightbulb, title: 'Criatividade e Inovação', delay: '.2s', description: 'Como utilizar a criatividade na resolução de problemas' },
  { icon: Brain, title: 'Brainstorm', delay: '.4s', description: 'Diferentes técnicas para gerar ideias' },
  { icon: UsersFour, title: 'Colaboração', delay: '.6s', description: 'A importância colaboração em times de desenvolvimento, e como desenvolvê-la' },
  { icon: Handshake, title: 'Criatividade + Colaboração', delay: '.2s', description: 'Como utilizar a colaboração para aumentar a criatividade' },
  { icon: LinkedinLogo, title: 'Linkedin', delay: '.4s', description: 'Como construir um perfil estratégico' },
  { icon: GithubLogo, title: 'Github', delay: '.6s', description: 'Desenvolvendo um GitHub campeão' },
  { icon: GitBranch, title: 'Projetos em grupo', delay: '.6s', description: 'Aprendendo a colaborar utilizando metodologias ágeis, e o passo a passo para apresentar o seu projeto' },
  { icon: PresentationChart, title: 'Apresentação de Projetos', delay: '.6s', description: 'Como apresentar projetos de forma eficaz' },
];

function SkillCard({ icon: Icon, title, delay, description }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-feature wow fadeInUp" data-wow-delay={ delay }>
        <div className="iconBg">
          <Icon />
        </div>
        <h3 className="mt-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="section-title" style={ { width: '100%' } }>
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={ { color: '#7e18de' } }>
              SoftSkills e Carreira
            </h3>

            <p className="wow fadeInUp" data-wow-delay=".6s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod dolorem alias aliquid tenetur.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {skillData.map((skill, index) => (
          <SkillCard key={ index } { ...skill } />
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;
