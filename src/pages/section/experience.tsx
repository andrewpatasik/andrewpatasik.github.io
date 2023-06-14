const Experience = () => {
  return (
    <>
      <div className="col-span-4">
        <h1
          style={{ fontFamily: "heebo, sans-serif" }}
          className="text-4xl text-gray-800 font-semibold tracking-normal mb-3"
        >
          Work Experience 
        </h1>
      </div>
      <aside className="text-xs pt-0.5 mr-4 text-gray-500 text-justify font-bold leading-relaxed">
      </aside>
      <article className="col-span-5 lg:col-span-4 text-lg space-y-2">
        <div className="flex flex-row justify-between">
          <p>Front-end Developer <span className="block sm:inline-block leading-tight">@ Esher Blockchain</span></p>
          <p>2022-2023</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>IT Department Staff <span className="block sm:inline-block leading-tight">@ PT. Asri Panca Warna</span></p>
          <p>2018-2019</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>IT Department Intern <span className="block sm:inline-block leading-tight">@ PT. Asri Panca Warna</span></p>
          <p>2016</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Android Developer Intern <span className="block sm:inline-block leading-tight">@ Sola Interactive</span></p>
          <p>2015</p>
        </div>

      </article>
    </>
  );
};

export default Experience;
