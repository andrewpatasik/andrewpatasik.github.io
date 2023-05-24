import ContentLayout from "./Layout/contentLayout";
import About from "./section/about";
import Contact from "./section/contact";
import Experience from "./section/experience";
import Project from "./section/project";

const Home = () => {
  return (
    <div className="text-gray-700">
      <ContentLayout className="mt-32 mb-12">
        <About />
      </ContentLayout>
      <ContentLayout className="my-12">
        <Experience />
      </ContentLayout>
      <ContentLayout className="my-12">
        <Project />
      </ContentLayout>
      <Contact />
    </div>
  );
};

export default Home;
