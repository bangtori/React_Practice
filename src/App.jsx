import React, { useState, useRef } from "react";

import AddProjectPage from "./components/AddProjectPage";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectTaskPage from "./components/ProjectTaskPage";

function App() {
  const projectsId = useRef(0);
  const [isAddPage, setIsAddPage] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  /**
   * 메인 페이지 화면 전환 핸들러
   * @param {'Task' | 'Add'} handlePage - 화면 종류: Task -> Add페이지로 전환 / Add -> Task 관리 페이지로 전환
   * @param {Object} project - Add Project Save 버튼 클릭시 전달
   */
  function handleMainPage(handlePage, project) {
    if (handlePage == "Add") {
      const newId = projectsId.current;
      projectsId.current += 1;
      if (project) {
        setProjects((prevProjects) => {
          const newProject = {
            id: newId,
            ...project,
          };
          return [...prevProjects, newProject];
        });
      }
      setIsAddPage(false);
    } else {
      setIsAddPage(true);
    }
  }

  function handleSelectProject(projectId) {
    const newSelectedProject = projects.find(
      (project) => project.id === projectId
    );
    setSelectedProject((prevProject) => {
      if (prevProject?.id === projectId) {
        return undefined;
      } else {
        return newSelectedProject;
      }
    });
  }

  function handleDeleteProject(projectId) {
    setSelectedProject(undefined);
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.id !== projectId);
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        handleAddButton={() => handleMainPage("Task")}
        handleSelectProject={handleSelectProject}
        selectedProjectId={selectedProject?.id}
        projects={projects}
      />
      {isAddPage ? (
        <AddProjectPage handleButton={handleMainPage} />
      ) : (
        <ProjectTaskPage
          project={selectedProject}
          handleAddButton={() => handleMainPage("Task")}
          deleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
