import React from 'react';

export type Props = {
  title: string,
  children: JSX.Element,
};

const Section = ({ title, children }) => (
  <section>
    <div className="container">
      <div className="grid">
        <div className="cell cell--3of12">
          <header>
            <h2>{title}</h2>
          </header>
        </div>
        <div className="cell cell--9of12">{children}</div>
      </div>
    </div>
  </section>
);

export default Section;
