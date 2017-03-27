// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Section from './Section';

import type { Intro } from './types';

const Introduction = ({ md }: { md: Intro }) => (
  <Section title="About">
    <ReactMarkdown source={md} escapeHtml />
  </Section>
);

export default Introduction;
