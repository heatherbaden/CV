// @flow

import React from 'react';
import Section from './Section';
import type { Skill } from './types';

const Skills = ({ list }: { list: Skill[] }) => (
  <Section title="Skills">
    <ul className="list--unstyled">
      {list.map(({ category, keywords }, i) => (
        <li key={i}>
          {!!category && <strong>{category}:</strong>}
          {' '}
          <span>{keywords.join(', ')}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Skills;
