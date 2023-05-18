import { Card } from './Card';
import { PROJECTS_LIST } from './data';

function Projects() {
  return (
    <section id="overview" className="app-info section">
      <div className="container">
        {
          PROJECTS_LIST.map((project, index) => (
            <Card key={ project.title } odd={ (index + 1) % 2 === 0 } { ...project } />
          ))
        }
      </div>

    </section>
  );
}

export default Projects;
