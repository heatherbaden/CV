import React from 'react';
import type { Eligibility } from './types';

const Eligibilities = ({ list }: { list: Eligibility[] }) => {
  return (
    <section>
      <div className="container">
        <div className="grid">
          <div className="cell cell--3of12">
            <header>
              <h2>Eligibilities</h2>
            </header>
          </div>
          <div className="cell cell--9of12">
            <p>Available to work in:</p>
            <ul>
              {list.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibilities;
