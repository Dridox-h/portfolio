import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { CRow, CCol, CCard, CCardBody } from '@coreui/react';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Projets 
      </motion.h1>
      <CRow>
        <CCol xs={12}>
          {PROJECTS.map((project, id) => (
            <CCard key={id} className="mt-3">
              <CCardBody>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4 relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="mb-6 rounded object-cover w-[150px] h-[150px]" />
                    <span className={`absolute top-0 left-0 px-2 py-1 text-xs font-semibold rounded-br ${
                      project.category === "scolaire" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                    }`}>
                      {project.category}
                    </span>
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
        </CCol>
      </CRow>
    </div>
  );
};

export default Projects;