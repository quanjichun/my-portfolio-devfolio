import React from 'react';

import Section from '../section';

const classes = {
  list: 'mb-6',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-sm text-gray-600 hover:text-black'
};

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <ul className={classes.list}>
      {
          about.map((d, index) => (
            <li key={`about_${index}`} className={classes.item}>
              <span className={classes.link}>{`#${d}`}</span>
            </li>
          ))
        }
      </ul>
    </Section>
  );
};

export default SectionAbout;
