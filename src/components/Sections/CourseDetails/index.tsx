import CourseDetailCard from '../../CourseDetailCard';

function CourseDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">Ementa</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">Como estão divididas as seções de front-end</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              O curso é dividido em 8 seções, cada uma com um objetivo específico.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <CourseDetailCard
          title="Introdução ao Front-end e Javascript Assíncrono"
          topics={ [
            'Criação de projetos com Vite',
            'Promises',
            'Async Await',
            'Testes assíncronos',
            'Novo projeto Ichoveu',
          ] }
          description="Os primeiros passos em um novo mundo"
          numberOfDays={ 5 }
        />
        <CourseDetailCard
          title="Introdução ao React"
          topics={ [
            'Criação de projetos React + Typescript com Vite',
            'Criação de componentes funcionais',
            'Introdução ao TypeScript',
            'Props',
            'Tipagem de props com TypeScript',
            'Renderização condicional',
            'Renderização de listas',
            'Estilização e utilização de imagens em componentes',
            'Event Handlers',
            'Utilizando estados com o hook useState',
            'Criando estados com tipos genéricos',
            'Formulários',
            'Elevação de estado',
            'Validando campos',
          ] }
          description="A base para o desenvolvimento front-end"
          numberOfDays={ 9 }
        />
        <CourseDetailCard
          title="Avançando em React"
          topics={ [
            'React Router (com componentes funcionais)',
            'Rotas dinâmicas',
            'Outlet',
            'Hook useLocation',
            'Hook useEffect',
          ] }
          description="Aprofundando no desenvolvimento front-end"
          numberOfDays={ 7 }
        />
        <CourseDetailCard
          title="Testando aplicações React"
          topics={ [
            'Configurando ambiente de teste',
            'React Testing Library',
            'Testando um componente',
            'Testando eventos',
            'Mocks',
            'Testando rotas',
          ] }
          description="Aprendendo a testar aplicações React"
          numberOfDays={ 5 }
        />
        <CourseDetailCard
          title="Estilização e metodologias ágeis"
          topics={ [
            'Estilização',
            'Manifesto ágil',
            'Kanban',
            'Scrum',
          ] }
          description="Aprofundando na estilização e metodologias ágeis"
          numberOfDays={ 7 }
        />
        <CourseDetailCard
          title="Gerenciamento de estados com Redux"
          topics={ [
            'Peças do Redux',
            'Redux Dev Tools',
            'Redux no React',
            'Lib react-redux (hooks useSelector e useDispatch)',
            'Redux Thunk',
            'Testes com Redux',
          ] }
          description="A ferramenta de gerenciamento de estados mais utilizado no mercado"
          numberOfDays={ 9 }
        />
        <CourseDetailCard
          title="Componentes de classe, ContextAPI e
          Hooks customizados"
          topics={ [
            'Componentes de classes e ciclo de vida',
            'ContextAPI',
            'Criação de Hooks Customizados',
            'Utiliação de Typescript',
          ] }
          description="Os toques finais para o desenvolvimento front-end"
          numberOfDays={ 8 }
        />
        <CourseDetailCard
          title="Projeto final"
          topics={ [] }
          description="O projeto final do curso"
          numberOfDays={ 11 }
        />
      </div>
    </div>
  );
}

export default CourseDetails;
