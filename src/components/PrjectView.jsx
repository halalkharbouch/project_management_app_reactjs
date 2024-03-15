import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const PrjectView = ({
  project,
  handleDeleteProject,
  handleAddTask,
  handleDeleteTask,
}) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex justify-between  mb-2">
        <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
        <Button onClick={() => handleDeleteProject(project)} style="danger">
          Delete
        </Button>
      </div>
      <h2 className="mb-4 text-stone-400">{project.date}</h2>
      <p className="pb-4 border-b-2 mb-4">{project.description}</p>
      <h2 className="text-3xl font-bold text-stone-800 mb-2">Tasks</h2>
      <form className="flex  gap-4 ">
        <input
          value={task}
          onChange={handleChange}
          type="text"
          className="basis-2/4 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
        <Button
          type="text"
          onClick={(e) => {
            e.preventDefault();
            handleAddTask(project, task);
            setTask("");
          }}
        >
          Add Task
        </Button>
      </form>
      {project.tasks.length > 0 ? (
        <div className="w-full mt-16 py-8 px-8 bg-stone-200 rounded-md ">
          {project.tasks.map((task, index) => (
            <div className="flex justify-between items-center" key={index}>
              <p>{task.title}</p>
              <Button style="danger" onClick={() => handleDeleteTask(task)}>
                Clear
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4">This project does not have any tasks yet.</p>
      )}
    </div>
  );
};

export default PrjectView;
