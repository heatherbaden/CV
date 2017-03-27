// @flow

import React from 'react';
import Section from './Section';
import type { Profile } from './types';

const iconClasses = {
  github: 'fa fa-lg fa-github',
  linkedin: 'fa fa-lg fa-linkedin',
  twitter: 'fa fa-lg fa-twitter',
  keybase: 'fa fa-lg fa-key',
};

const icon = name => {
  if (!name) {
    return null;
  }
  return <span className={iconClasses[name.toLowerCase()]} />;
};

const Profiles = ({ list }: { list: Profile[] }) => (
  <Section title="Profiles">
    <ul className="grid list--unstyled list--printtabular">
      {list.map(({ name, username, website }, i) => (
        <li key={i} className="cell cell--3of12">
          {icon(name)}
          {' '}
          <a href={website} title={name}>
            {username}
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Profiles;
