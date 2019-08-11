import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Photo';
import image1 from '../../assets/images/photo/2005-1.jpg';
import image2 from '../../assets/images/photo/2005-2.jpg';
import image3 from '../../assets/images/photo/2007-1.jpg';
import image4 from '../../assets/images/photo/2008-2.jpg';
import image5 from '../../assets/images/photo/2009-1.jpg';
import image6 from '../../assets/images/photo/2011-2.jpg';

const imageSrcs = ['2011-2.jpg','2009-1.jpg','2008-2.jpg','2007-1.jpg','2005-2.jpg','2005-1.jpg']
export default (props) => {
  return (
    <Template>
      <img className="drop-shadow" src={image6}/>
      <img className="drop-shadow" src={image5}/>
      <img className="drop-shadow" src={image4}/>
      <img className="drop-shadow" src={image3}/>
      <img className="drop-shadow" src={image2}/>
      <img className="drop-shadow" src={image1}/>
    </Template>
  );
};
