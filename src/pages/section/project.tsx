import Card from "../../components/Card";
import projectData from "../../data/projects.json";

const Project = () => {
  return (
    <>
      <div className="col-span-4">
        <h1
          style={{ fontFamily: "heebo, sans-serif" }}
          className="text-4xl text-gray-800 font-semibold tracking-normal mb-3"
        >
          Projects
        </h1>
      </div>
      <aside className="text-xs pt-0.5 mr-4 text-gray-500 text-justify font-bold leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lobortis
          orci, a volutpat erat. Nulla facilisi. Donec nec lectus pharetra,
          ultrices enim vitae, rhoncus velit. Fusce sit amet bibendum ex.
        </p>
      </aside>
      <article className="col-span-4 grid grid-cols-3 gap-4">
        {projectData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </article>
    </>
  );
};

export default Project;
