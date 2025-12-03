import React from "react";
import noProjectImg from "../assets/no-projects.png";

function formattedDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ProjectTaskPage({ project, handleAddButton }) {
  // project 선택 안했을 시
  if (!project) {
    return (
      <div className="w-[35rem] mt-32 flex-1 flex flex-col items-center min-h-screen">
        <img src={noProjectImg} className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
          Please select a project or create a new one.
        </p>
        <p className="mt-8">
          <button
            onClick={handleAddButton}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950"
          >
            Create Project
          </button>
        </p>
      </div>
    );
  }

  // project 선택 시
  const { title, description, dueDate } = project;
  const date = formattedDate(dueDate);
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          {title}
        </header>
        <button className="text-stone-700 hover:text-red-500">Delete</button>
      </div>
      <p className="mb-4 text-stone-400">{date}</p>
      <p className="mb-4 text-stone-600 whitespace-pre-wrap">{description}</p>
      <hr />
      {/* Task Section */}
    </div>
  );
}

export default ProjectTaskPage;
