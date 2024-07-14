import Theme from './Theme';
import Button from '../UI/Button/Button';
import ProjectsList from '../ProjectsList/ProjectsList';

export default function SidePanel({
  projects,
  handleSelectProject,
  selectedProject,
  handleAddProject,
  deleteProject,
}) {
  return (
    <>
      <div
        className={Theme.base}
        id='side-panel'
      >
        <h1 className={Theme.title}>YOUR PROJECTS</h1>
        <div className={Theme.button}>
          <Button
            type='outline'
            color='info'
            text='+ Add project'
            size='xl'
            CTA={handleAddProject}
          />
        </div>
        <ProjectsList
          projects={projects}
          handleSelectProject={handleSelectProject}
          selectedProject={selectedProject}
          deleteProject={deleteProject}
        />
      </div>
    </>
  );
}
