import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Photo';
import LanguagePreference from '../../components/LanguagePreference';
import tutorialImage1 from '../../assets/images/homepage/main.jpg';
import tutorialImage2 from '../../assets/images/homepage/main2.jpg';

export default (props) => {
  return (
    <Template>
      <img className="drop-shadow" src={tutorialImage1}/>
      <img className="drop-shadow" src={tutorialImage2}/>
      <img className="drop-shadow" src={tutorialImage2}/>
    </Template>
  );
};
