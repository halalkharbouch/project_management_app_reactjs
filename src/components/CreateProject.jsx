import Button from "./Button";
import ClipBoardPng from "../assets/no-projects.png";
import { useRef } from "react";

const CreateProject = ({ handleAddProject }) => {
  
  return (
    <div className="mx-auto mt-16 flex flex-col gap-4 items-center">
      <img
        src={ClipBoardPng}
        alt="Clip Board"
        className="w-20 h-20 ml-[-1rem]"
      />
      <h2 className="text-stone-700 font-bold text-xl ">No Project Selected</h2>
      <p className="text-lg text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>
      <Button style="secondary" onClick={handleAddProject}>
        Create new project
      </Button>
    </div>
  );
};

export default CreateProject;
