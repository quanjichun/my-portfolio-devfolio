import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ educations }) => {
  return (
    <Section title="Education">
      {educations.map((education, index) => (
        <SummaryItem
          key={`education_${index}`}
          name={education.name}
          description={education.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
