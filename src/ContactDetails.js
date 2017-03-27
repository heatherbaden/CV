// @flow

import React from 'react';
import Section from './Section';
import type { Personal, Location } from './types';

const ContactDetails = (
  { preferredName, phone, email, city, country }: Personal & Location,
) => (
  <Section title="Contact Details">
    <ul className="grid list--unstyled list--printtabular">
      <li className="cell cell--4of12">
        <span className="fa fa-lg fa-at" aria-hidden="true" />
        {' '}
        <a href={`mailto:${email}`} title={`${preferredName} <${email}>`}>
          {email}
        </a>
      </li>
      <li className="cell cell--4of12">
        <span className="fa fa-lg fa-globe" aria-hidden="true" />
        {' '}
        {[city, country].filter(Boolean).join(', ')}
      </li>
    </ul>
  </Section>
);
export default ContactDetails;
