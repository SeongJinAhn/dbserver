import React from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';
import logo from '../assets/images/logos/lore_logo_text.png';

export default (props) => {
  const {
    location
  } = props;

  return (
    <ul className="nav nav-bordered nav-stacked">
      <li className="nav-header">People</li>
      <NavLink layout="Professor" title="Professors" url="/professor/" location={location} />
      <NavLink layout="Ph.D Degree" title="Ph.D Students" url="/phd/" location={location} />
      <NavLink layout="M.S Degree" title="M.S Students" url="/ms/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Research</li>
      <NavLink title="Graph Data Management" url="/graphmanage/" location={location} />
      <NavLink title="Graph Analysis" url="/graphanalysis/" location={location} />
      <NavLink title="Hypergraph Analysis" url="/hyperanalysis/" location={location} />
      <NavLink title="Time Series Analysis" url="/seriesanalysis/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Projects</li>
      <NavLink title="KEPCO" url="/kepco/" location={location} />
      <NavLink title="Bio Project" url="/bio/" location={location} />
      <NavLink title="Samsung" url="/samsung/" location={location} />
      {/*<NavLink title="Core Libraries" url="/libraries/" location={location} />*/}

      <li className="nav-divider"></li>
      <li className="nav-header">Publication</li>
      <NavLink title="International Journal" url="/intjournal/" location={location} />
      <NavLink title="International Conference" url="/intconference/" location={location} />
      <NavLink title="Domestic Journal" url="/domjournal/" location={location} />
      <NavLink title="Domestic Conference" url="/domconference/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-divider"></li>
 
      <NavLink title="Contact" url="/publishing/" location={location} />
    </ul>
  );
};
