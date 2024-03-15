import Button from "./Button";

const SideBar = ({ projects, handleAddProject, onClick }) => {
  return (
    <aside className="basis-[20%] bg-stone-950 rounded-r-2xl flex flex-col gap-8 items-start px-8 py-16">
      <h2 className="text-white uppercase font-bold text-2xl">Your project</h2>
      <Button onClick={handleAddProject} style="primary">+ Add Project</Button>
      <ul className="flex flex-col gap-2 w-full">
        {projects.map((project, index) => (
          <li onClick={() => onClick(project)} key={index} className="text-stone-600 hover:bg-stone-500 hover:cursor-pointer hover:bg-opacity-10 hover:text-stone-200 p-1">{project.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
