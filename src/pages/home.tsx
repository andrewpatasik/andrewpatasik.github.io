import ContentLayout from "./Layout/contentLayout";

const Home = () => {
  return (
    <div>
      <ContentLayout className="mt-32 mb-12">
        <>
          <div></div>
          <div className="col-span-4">
            <h1
              style={{ fontFamily: "heebo, sans-serif" }}
              className="text-7xl text-gray-800 font-semibold tracking-tighter mb-2"
            >
              Digital Product Designer
            </h1>
          </div>
          <aside className="text-xs pt-0.5 mr-4 text-justify text-gray-500 font-bold leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              lobortis orci, a volutpat erat. Nulla facilisi. Donec nec lectus
              pharetra, ultrices enim vitae, rhoncus velit. Fusce sit amet
              bibendum ex.
            </p>
          </aside>
          <article className="col-span-4 grid grid-cols-3 gap-4">
            <p>
              Donec sed enim et mauris fringilla bibendum sed blandit nibh.
              Morbi quis metus sed quam vestibulum faucibus ac ut sem. Duis et
              odio id nulla viverra lobortis in sed nisi. Praesent porttitor
              consectetur velit, sit amet finibus ex finibus sed. Pellentesque
              lacinia ultrices libero id mollis. Quisque fringilla finibus
              libero, at lacinia ipsum. Donec at neque eu elit euismod dapibus.
            </p>
            <p>
              Etiam facilisis libero at felis eleifend elementum. Praesent vel
              mi nisi. Pellentesque massa magna, feugiat iaculis erat ornare,
              aliquam rutrum tellus. Vivamus tincidunt, eros at aliquam
              tincidunt, purus lorem euismod libero, facilisis mattis dui sapien
              vel ex. Cras nec odio ante.
            </p>
            <p>
              Aliquam molestie turpis molestie metus porttitor, id tempor diam
              porttitor. Phasellus eu ipsum vitae nisl mollis sodales. Praesent
              dolor leo, elementum nec vehicula sit amet, tempor eget orci.
            </p>
          </article>
        </>
      </ContentLayout>
    </div>
  );
};

export default Home;
