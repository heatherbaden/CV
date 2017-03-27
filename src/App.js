// @flow

import React from 'react';
import ContactDetails from './ContactDetails';
import Eligibilities from './Eligibilities';
import Introduction from './Introduction';
import Education from './Education';
import WorkDetails from './WorkDetails';
import Projects from './Projects';
import Profiles from './Profiles';
import Skills from './Skills';
import type { CV } from './types';

import './hack.css';
import './standard.css';
import './index.css';

const App = ({ cv }: { cv: CV }) => {
  const {
    intro,
    personal,
    title,
    location,
    eligibilities = [],
    profiles = [],
    education = [],
    projects = [],
    skills = [],
    work = [],
  } = cv;

  return (
    <main className="standard">
      <header className="jumbotron">
        <div className="container">
          <div className="grid grid--right">
            <div className=" cell cell--9of12">
              <h1 className="flush">{personal.preferredName}</h1>
              <p className="flush">{title}</p>
            </div>
          </div>
        </div>
      </header>
      <Introduction md={intro} />
      <ContactDetails
        preferredName={personal.preferredName}
        email={personal.email}
        city={location.city}
        country={location.country}
      />
      {!!profiles.length && <Profiles list={profiles} />}
      {!!eligibilities.length && <Eligibilities list={eligibilities} />}
      {!!skills.length && <Skills list={skills} />}
      {!!projects.length && <Projects list={projects} />}
      {!!education.length && <Education list={education} />}
      <div className="page-break" />
      {!!work.length && <WorkDetails list={work} />}

      <aside className="text--right">
        <div className="container">
          <p>
            <small>
              This document is hosted at:
              {' '}
              <a href="https://heatherbaden.github.io/cv/">
                https://heatherbaden.github.io/cv/
              </a>
            </small>
            <br />
            <small>
              The source code is available at:
              {' '}
              <a href="https://github.com/heatherbaden/cv">
                https://github.com/heatherbaden/cv
              </a>
            </small>
          </p>
        </div>
      </aside>
    </main>
  );
};

export default App;
