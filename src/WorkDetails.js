// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Section from './Section';
import type { Work } from './types';

const WorkEntry = (
  {
    startDate,
    endDate,
    organization,
    website,
    position,
    description,
    highlights,
  },
) => (
  <li>
    <h3>
      {organization}
      {' '}
      <a href={website}><small>{website}</small></a>
      <br />
      <small>{`${position} (${startDate} — ${endDate})`}</small>
    </h3>
    {description && <ReactMarkdown source={description} escapeHtml />}
    {!!highlights.length &&
      <ul>
        {highlights.map((hl, n) => (
          <li key={n}>
            <ReactMarkdown source={hl} escapeHtml />
          </li>
        ))}
      </ul>}
  </li>
);
WorkEntry.defaultProps = {
  endDate: 'current',
  highlights: [],
};
const WorkDetails = ({ list }: { list: Work[] }) => (
  <Section title="Work Details">
    <ul className="list--unstyled list--spaced">
      {list.map((el, i) => <WorkEntry {...el} key={i} />)}
    </ul>
  </Section>
);
export default WorkDetails;
