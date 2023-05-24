import ContentLayout from "./Layout/contentLayout";
import About from "./section/about";
import Experience from "./section/experience";

const Home = () => {
  return (
    <div className="text-gray-700">
      <ContentLayout className="mt-32 mb-12">
        <About />
      </ContentLayout>
      <ContentLayout className="my-12">
        <Experience />
      </ContentLayout>
    </div>
  );
};

export default Home;
