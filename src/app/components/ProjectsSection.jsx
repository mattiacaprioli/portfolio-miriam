"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Consulente Google Ads Luigi Virginio",
    description: "Blog ",
    image: "/images/projects/image1.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://luigivirginio.com/blog/",
  },
  {
    id: 2,
    title: "Metodo Universitario",
    description: "Analisi della presenza online, di mercato e competitor",
    image: "/images/projects/image2.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAFz2CzbfGs/P88VVYtFeHpo9hW9pZEsTA/view?utm_content=DAFz2CzbfGs&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 3,
    title: "Facebook Ads",
    description: "Campagne facebook ads e portfolio completo",
    image: "/images/projects/image3.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAGA0MAPuw8/h4LN0MzV255v_FzJOUZv5w/view?utm_content=DAGA0MAPuw8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 4,
    title: "Funnel Marketing",
    description: "Ideazione funnel di vendita e strategia di marketing",
    image: "/images/projects/image4.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAFim4fl_5o/vugJ4fgL3ljf5eX4hknpKA/view?utm_content=DAFim4fl_5o&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 5,
    title: "Google Ads",
    description: "Progettazione e sviluppo di campagne google ads",
    image: "/images/projects/image5.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAFrZ1KjwBc/f_B5KpBOR9XbU4H8UUG4Dg/view?utm_content=DAFrZ1KjwBc&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    id: 6,
    title: "Italy Food Awards",
    description: "Analisi e proposta di sviluppo della presenza online",
    image: "/images/projects/image6.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAF1Kjye5aM/367ZxvIx_witaa9Hr913Ag/view?utm_content=DAF1Kjye5aM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Progetti
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;