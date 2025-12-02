import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectTaskPage from "./components/ProjectTaskPage";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <ProjectTaskPage />
    </main>
  );
}

export default App;
