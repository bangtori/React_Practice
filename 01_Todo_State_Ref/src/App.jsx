import { useState, useRef } from "react";

import AddProjectPage from "./components/AddProjectPage";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectTaskPage from "./components/ProjectTaskPage";

function App() {
  const projectsId = useRef(0);
  const [isAddPage, setIsAddPage] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  // 렌더링 될 때마다 최신 projects 배열에서 현재 선택된 프로젝트를 찾아내서
  // projects가 업데이트될 때 얘도 자동으로 최신 내용을 반영하도록 하기
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

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
    setSelectedProjectId((prevId) => {
      // 이미 선택된 걸 또 누르면 선택 해제
      if (prevId === projectId) {
        return undefined;
      }
      return projectId;
    });
  }

  function handleDeleteProject(projectId) {
    setSelectedProjectId(undefined);
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.id !== projectId);
    });
  }

  function handleAddTask(projectId, task) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        // 추가 대상일 경우
        if (project.id === projectId) {
          const updateProjectTask = {
            ...project,
            tasks: [...project.tasks, task],
          };
          return updateProjectTask;
        }
        // 타켓 아니면 그대로 리턴
        return project;
      });
    });
  }

  function handleDeleteTask(projectId, taskId) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        // 타겟 프로젝트인 경우
        if (project.id === projectId) {
          // Task 삭제한 newTask로 교체
          const newTasks = project.tasks.filter((task) => task.id !== taskId);
          return {
            ...project,
            tasks: newTasks,
          };
        }
        // 타켓 아니면 그대로 리턴
        return project;
      });
    });
  }

  const taskHandler = {
    onAdd: handleAddTask,
    onDelete: handleDeleteTask,
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        handleAddButton={() => handleMainPage("Task")}
        handleSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId}
        projects={projects}
      />
      {isAddPage ? (
        <AddProjectPage handleButton={handleMainPage} />
      ) : (
        <ProjectTaskPage
          project={selectedProject}
          handleAddButton={() => handleMainPage("Task")}
          deleteProject={handleDeleteProject}
          taskHandler={taskHandler}
        />
      )}
    </main>
  );
}

export default App;
