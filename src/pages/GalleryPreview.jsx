import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryPreview.css"; // custom css file
import { OurProjectLeft, OurProjectRight } from "../data/ProjectsData";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="row">
      <h2 className="services-title my-3 content-t-w">Our Projects</h2>

      {/* Left Projects */}
      {OurProjectLeft.map((project, index) => (
        <div key={`left-${index}`} className="col-lg-4 col-md-6 mb-4">
          <div
            className="our-projects-image-container w-100"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.place}
              width="100%"
              height="100%"
              className="our-projects-image"
            />
            <div className="hero-image-overlay"></div>
            <div className="our-projects-content">
              <h6>{project.place}</h6>
              <p className="m-0">{project.model}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Right Projects */}
      {OurProjectRight.map((project, index) => (
        <div key={`right-${index}`} className="col-lg-4 col-md-6 mb-4">
          <div
            className="our-projects-image-container w-100"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.place}
              width="100%"
              height="100%"
              className="our-projects-image"
            />
            <div className="hero-image-overlay"></div>
            <div className="our-projects-content">
              <h6>{project.place}</h6>
              <p className="m-0">{project.model}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="modal-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
