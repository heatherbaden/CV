import React from 'react';
import Section from './Section';
import type { Education } from './types';

const Edu = ({ list }: { list: Education[] }) => (
  <Section title="Education">
    <ul className="list--unstyled">
      {list.map(({ institution, qualification, yearStart, yearEnd }, i) => (
        <li key={i}>
          <p>
            <strong>{`${institution} (${yearStart} - ${yearEnd})`}</strong>
            <br />
            <span>{qualification}</span>
          </p>
        </li>
      ))}
    </ul>
  </Section>
);
export default Edu;
