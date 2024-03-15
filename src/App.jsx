import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import AddProjectForm from "./components/AddProjectForm";
import PrjectView from "./components/PrjectView";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INITIAL_FORM_DATA = {
  id: null,
  title: "",
  description: "",
  date: "",
  tasks: [],
};

function App() {
  const modalRef = useRef();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    formData.id = uuidv4();
    setProjects((prevProjects) => [...prevProjects, formData]);
    setFormData(INITIAL_FORM_DATA);
    handleCloseModal();
  };

  const handleAddProject = () => {
    modalRef.current.open();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    modalRef.current.close();
    setShowModal(false);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleAddTask = (project, task) => {
    const updateProject = {
      ...project,
      tasks: [...project.tasks, { title: task, id: uuidv4() }],
    };
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((proj) => {
        if (proj.id === selectedProject.id) {
          // Create a new project object and a new tasks array
          return updateProject;
        } else {
          return proj;
        }
      });
      return updatedProjects;
    });
    setSelectedProject(updateProject);
  };

  const handleDeleteTask = (task) => {
    console.log(selectedProject.tasks);
    const updatedTasks = selectedProject.tasks.filter((t) => t.id !== task.id);
    console.log(updatedTasks);

    setProjects((prevProjects) => {
      const updatedProject = {
        ...selectedProject,
        tasks: updatedTasks,
      };

      return prevProjects.map((project) => {
        if (project.id === selectedProject.id) {
          return updatedProject;
        } else {
          return project;
        }
      });
    });

    setSelectedProject({ ...selectedProject, tasks: updatedTasks });
  };
  const handleDeleteProject = (project) => {
    let nextProjectIndex = projects.findIndex((p) => p.id === project.id);
    const nextProject =
      projects.length >= 2 && projects.length >= nextProjectIndex + 1 ? projects[nextProjectIndex + 1] : null;
    setProjects((prevProjects) =>
      prevProjects.filter((p) => p.id !== project.id)
    );
    setSelectedProject(nextProject);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onClick={handleSelectProject}
        projects={projects}
        handleAddProject={handleAddProject}
      />
      {!showModal && !selectedProject && (
        <CreateProject handleAddProject={handleAddProject} />
      )}
      <AddProjectForm
        data={formData}
        onChange={handleChange}
        onClick={handleSubmit}
        ref={modalRef}
        handleCloseModal={handleCloseModal}
      />
      {selectedProject && (
        <PrjectView
          handleAddTask={handleAddTask}
          project={selectedProject}
          handleDeleteTask={handleDeleteTask}
          handleDeleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
