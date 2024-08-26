import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { CRow, CCol, CCollapse, CCard, CCardBody, CButton } from '@coreui/react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const filteredProjects = activeCategory
    ? PROJECTS.filter((project) => project.category.toLowerCase() === activeCategory.toLowerCase())
    : PROJECTS;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Projets 
      </motion.h1>
      <div className="my-20 text-center text-4xl">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="inline-block">
          <CButton 
            onClick={() => handleCategoryClick("scolaire")} 
            className={`relative inline-block w-[8em] h-[2.6em] leading-[2.5em] m-[20px] cursor-pointer overflow-hidden border-2 border-[#560bad] transition-colors duration-500 z-10 text-[17px] rounded-[6px] font-medium ${activeCategory === "scolaire" ? "text-white bg-[#560bad]" : "text-[#7d3adf]"} before:content-[''] before:absolute before:z-[-1] before:bg-[#560bad] before:h-[150px] before:w-[200px] before:rounded-full before:top-[100%] before:left-[100%] before:transition-all before:duration-700 hover:text-white hover:before:top-[-30px] hover:before:left-[-30px] active:before:bg-[#3a0ca3] active:before:transition-none bg-purple-800 bg-opacity-35 mx-8 px-4`}>
            Scolaire
          </CButton>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="inline-block">
          <CButton 
            onClick={() => handleCategoryClick("personnel")} 
            className={`relative inline-block w-[8em] h-[2.6em] leading-[2.5em] m-[20px] cursor-pointer overflow-hidden border-2 border-[#560bad] transition-colors duration-500 z-10 text-[17px] rounded-[6px] font-medium ${activeCategory === "personnel" ? "text-white bg-[#560bad]" : "text-[#7d3adf]"} before:content-[''] before:absolute before:z-[-1] before:bg-[#560bad] before:h-[150px] before:w-[200px] before:rounded-full before:top-[100%] before:left-[100%] before:transition-all before:duration-700 hover:text-white hover:before:top-[-30px] hover:before:left-[-30px] active:before:bg-[#3a0ca3] active:before:transition-none bg-purple-800 bg-opacity-35 mx-8 px-4`}>
            Personnel 
          </CButton>
        </motion.div>
      </div>
      <CRow>
        <CCol xs={12}>
          <CCollapse visible={filteredProjects.length > 0}>
            {filteredProjects.map((project, id) => (
              <CCard key={id} className="mt-3">
                <CCardBody>
                  <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="mb-6 rounded object-cover w-[150px] h-[150px]" />
                    </motion.div>
                    <motion.div  
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1 }}
                      className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-0 font-semibold">{project.title}</h6>
                      <p className="mb-4 text-neutral-400">{project.description}</p>
                      {project.technologies.map((tech, techId) => (
                        <span key={techId} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"> 
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </CCardBody>
              </CCard>
            ))}
          </CCollapse>
        </CCol>
      </CRow>
      {filteredProjects.length === 0 && activeCategory && (
        <div className="text-center text-neutral-400">Aucun projet disponible dans cette catégorie.</div>
      )}
    </div>
  );
};

export default Projects;
