import Theme from './Theme';
import Project from '../Project/Project';
import BackButton from '../UI/BackButton/BackButton';

export default function ProjectsInfoPanel({ project, backControl }) {
  return (
    <div
      className={Theme.base}
      id='projects-info-panel'
    >
      <BackButton CTA={backControl} />
      {project.length > 0 && (
        <Project
          title={project[0].title}
          description={project[0].description}
          date={project[0].date}
        />
      )}
    </div>
  );
}
