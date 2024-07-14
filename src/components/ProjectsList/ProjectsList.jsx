import Theme from './Theme';
import classBundle from '../../../utils/classBundle';

export default function ProjectsList({
  projects,
  handleSelectProject,
  selectedProject,
  deleteProject,
}) {
  const content = projects.map((project) => {
    const isActive = selectedProject[0]?.id === project.id;
    return (
      <li
        className={classBundle([
          Theme.text.base,
          Theme.text.item,
          isActive ? Theme.active : '',
        ])}
        key={project.id}
        onClick={() => handleSelectProject(project.id)}
      >
        <a>{project.title}</a>
        <button
          className={Theme.deleteButton}
          onClick={(e) => {
            e.stopPropagation();
            deleteProject(project.id);
          }}
        >
          x
        </button>
      </li>
    );
  });

  return (
    <div id='projects-list'>
      {projects.length <= 0 && (
        <p className={Theme.text.base}>No projects available</p>
      )}
      {projects.length > 0 && <ul>{content}</ul>}
    </div>
  );
}
