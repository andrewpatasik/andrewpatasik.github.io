import { Suspense, lazy } from "react";
import ContentLayout from "./Layout/contentLayout";
import About from "./section/about";
import Contact from "./section/contact";
import Project from "./section/project";

const Experience = lazy(() => import("./section/experience"));

const Home = () => {
  return (
    <div className="text-gray-700">
      <ContentLayout className="mt-32 mb-12">
        <About />
      </ContentLayout>
      <ContentLayout className="my-24">
        <Suspense fallback={<div>loading</div>}>
          <Experience />
        </Suspense>
      </ContentLayout>
      {/* <ContentLayout className="my-12">
        <Project />
      </ContentLayout> */}
      <Contact />
    </div>
  );
};

export default Home;
