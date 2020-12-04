import React from 'react';

import Section from '../section';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light text-base',
  ul: 'list-disc pl-12',
  itemTitle: 'font-bold'
};

const ProjectItem = ({ name, values }) =>
  values && values.length > 0 ? (
    <div>
      <div className={classes.itemTitle}>{name}</div>
      <ul className={classes.ul}>
        {values.map((v, index) => (
          <li key={`${name}_${index}`}>{v}</li>
        ))}
      </ul>
    </div>
  ) : (
    ''
  );

const Project = ({ project }) => {
  const { name, link, description } = project;
  const { content, contribution, skills, achivement } = description;
  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link && link.length > 0 ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {name}
      </h3>
      <div className={classes.description}>
        <ProjectItem name="Description: " values={content} />
        <ProjectItem name="Contribution: " values={contribution} />
        <ProjectItem name="Skills: " values={skills} />
        <ProjectItem name="Achivement: " values={achivement} />
      </div>
    </div>
  );
};

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project, index) => (
        <Project key={`project_${index}`} project={project} />
      ))}
    </Section>
  );
};

export default SectionProjects;
