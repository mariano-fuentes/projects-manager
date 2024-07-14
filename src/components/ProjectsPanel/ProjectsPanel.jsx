import { useState, useEffect, useMemo } from 'react';
import SidePanel from '../SidePanel/SidePanel';
import ProjectsInfoPanel from '../ProjectsInfoPanel/ProjectsInfoPanel';
import classBundle from '../../../utils/classBundle';
import Theme from './Theme';
import NoProjectsPanel from '../NoProjectsPanel/NoProjectsPanel';
import ProjectForm from '../ProjectForm/ProjectForm';
import dataManager from '../../utils/dataManager';
import manager from '../../utils/projectManager';

export default function ProjectsPanel() {
  const [projects, setProjects] = useState(dataManager.loadData());
  const [selectedProject, setSelectedProject] = useState([]);
  const [pageToRender, setPageToRender] = useState('noProjectsPanel');

  function handleSelectProject(id) {
    const selectedProject = [];
    selectedProject.push(projects.find((project) => project.id === id));
    setSelectedProject(selectedProject);
    setPageToRender('projectsPanelInfo');
  }

  function handleBackControl() {
    if (selectedProject.length > 0) {
      setPageToRender('projectsPanelInfo');
    } else {
      setPageToRender('noProjectsPanel');
    }
  }

  function handleAddProject() {
    setPageToRender('projectForm');
  }

  function handleReloadProjects() {
    const updatedProjects = dataManager.loadData();
    setProjects(updatedProjects);
  }

  function handleDeleteProject(id) {
    debugger;
    manager.delete(id);
    handleReloadProjects();
    setSelectedProject([]);
    setPageToRender('noProjectsPanel');
  }

  const content = () => {
    switch (pageToRender) {
      case 'noProjectsPanel':
        return <NoProjectsPanel handleAddProject={handleAddProject} />;
      case 'projectForm':
        return (
          <ProjectForm
            reloadProjects={handleReloadProjects}
            backControl={handleBackControl}
          />
        );
      case 'projectsPanelInfo':
        return (
          <ProjectsInfoPanel
            project={selectedProject}
            backControl={() => {
              setPageToRender('noProjectsPanel');
              setSelectedProject([]);
            }}
          />
        );
    }
  };

  return (
    <div
      className={classBundle([Theme.base])}
      id='projects-panel'
    >
      <div className={Theme.sidePanel}>
        <SidePanel
          projects={projects}
          handleSelectProject={handleSelectProject}
          selectedProject={selectedProject}
          handleAddProject={handleAddProject}
          deleteProject={handleDeleteProject}
        ></SidePanel>
      </div>
      <div
        id='main'
        className={Theme.pageContent}
      >
        {content()}
      </div>
    </div>
  );
}
