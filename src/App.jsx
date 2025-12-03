import React, { useState } from "react";

import AddProjectPage from "./components/AddProjectPage";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectTaskPage from "./components/ProjectTaskPage";

function App() {
  const [isAddPage, setIsAddPage] = useState(false);
  const [projects, setProjects] = useState([]);

  /**
   * 메인 페이지 화면 전환 핸들러
   * @param {'Task' | 'Add'} handlePage - 화면 종류: Task -> Add페이지로 전환 / Add -> Task 관리 페이지로 전환
   * @param {Object} project - Add Project Save 버튼 클릭시 전달
   */
  function handleMainPage(handlePage, project) {
    if (handlePage == "Add") {
      if (project) {
        setProjects((prevProjects) => {
          return [...prevProjects, project];
        });
      }
      setIsAddPage(false);
    } else {
      setIsAddPage(true);
    }
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        handleAddButton={() => handleMainPage("Task")}
        projects={projects}
      />
      {isAddPage ? (
        <AddProjectPage handleButton={handleMainPage} />
      ) : (
        <ProjectTaskPage handleAddButton={() => handleMainPage("Task")} />
      )}
    </main>
  );
}

export default App;
