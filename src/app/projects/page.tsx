import ProjectsPortfolio from "src/widgets/ProjectsPortfolio";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore all my projects, products, and experiments.",
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto max-w-6xl py-8">
      <ProjectsPortfolio featuredOnly={false} />
    </div>
  );
};

export default ProjectsPage;
