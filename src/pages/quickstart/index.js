import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Photo';
import LanguagePreference from '../../components/LanguagePreference';
import tutorialImage from '../../assets/images/quickstart/lore-tutorial-twitter.png';

export default (props) => {
  return (
    <Template>
      <img className="drop-shadow" src={tutorialImage}/>
    </Template>
  );
};
