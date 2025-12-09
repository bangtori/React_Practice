import { useRef } from "react";
import ProjectInput from "./ProjectInput";
import Modal from "./Modal";

function AddProjectPage({ handleButton }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (enteredTitle === "") {
      modalRef.current.open();
      return;
    }

    handleButton("Add", {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      tasks: [],
    });
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for Title field.
        </p>
      </Modal>
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
    </>
  );
}

export default AddProjectPage;
