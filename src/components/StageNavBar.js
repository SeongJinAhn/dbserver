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
      <NavLink layout="philosophy" title="Professors" url="/professor/" location={location} />
      <NavLink layout="features" title="Ph.D Students" url="/phd/" location={location} />
      <NavLink layout="quickstart" title="M.S Students" url="/ms/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Projects</li>
      <NavLink title="Samsung" url="/react/" location={location} />
      <NavLink title="KEPCO" url="/react-router/" location={location} />
      <NavLink title="Bio Project" url="/redux/" location={location} />
      {/*<NavLink title="Core Libraries" url="/libraries/" location={location} />*/}

      <li className="nav-divider"></li>
      <li className="nav-header">Publication</li>
      <NavLink title="International Journal" url="/anatomy/" location={location} />
      <NavLink title="International Conference" url="/building/" location={location} />
      <NavLink title="Domestic Journal" url="/publishing/" location={location} />
      <NavLink title="Domestic Conference" url="/publishing/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-divider"></li>
 
      <NavLink title="Contact" url="/publishing/" location={location} />
    </ul>
  );
};
