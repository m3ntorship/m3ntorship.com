import React from 'react';

const ProjectCard = ({ data }) => {
  if (data) {
    return (
      <div className="project-card bg-c1200 p-10">
        <div className="my-10">
          <h2 className="inline-block">Title</h2>
          <div className='inline-block float-right'>
            <a href="#" className='font-bold'>More</a>
          </div>
        </div>
        <p className="description my-20 text-c600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
  }
};

export default ProjectCard;
