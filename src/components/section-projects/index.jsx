import React from 'react';

import Section from '../section';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const Project = ({ project }) => {
  const {name, link, description} = project;
  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link && link.length > 0 ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project, index) => (
        <Project
          key={`project_${index}`}
          project={project}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
