import { useRef } from "react";
import ProjectInput from "./ProjectInput";

function AddProjectPage({ handleButton }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (enteredTitle === "") {
      window.alert("Please enter TITLE");
      return;
    }

    handleButton("Add", {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={() => handleButton("Add")}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <ProjectInput ref={titleRef}>title</ProjectInput>
      <ProjectInput ref={descriptionRef} textarea>
        description
      </ProjectInput>
      <ProjectInput ref={dueDateRef} type="date">
        due date
      </ProjectInput>
    </div>
  );
}

export default AddProjectPage;
