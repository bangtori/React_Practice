function ProjectsSidebar({
  handleAddButton,
  handleSelectProject,
  selectedProjectId,
  projects,
}) {
  const defaultClassProps =
    "text-left w-full px-2 py-1 text-stone-600 hover:text-stone-50";
  const selectClassProps =
    "text-left w-full px-2 py-1 rounded-md bg-stone-800 text-stone-50";
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        onClick={handleAddButton}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between my-4">
            <button
              onClick={() => handleSelectProject(project.id)}
              className={
                project.id === selectedProjectId
                  ? selectClassProps
                  : defaultClassProps
              }
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
