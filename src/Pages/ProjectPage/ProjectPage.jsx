import React from "react";
import Contact from "../../Components/Contact/Contact";
import ProjectSection from "../../Components/ProjectSection/ProjectSection";
const ProjectPage = () => {


  return (
    <>

      <div>
        <ProjectSection />
      </div>
      <div id="contact">
        <Contact com={"project"} />

      </div>
    </>
  );
};

export default ProjectPage;
