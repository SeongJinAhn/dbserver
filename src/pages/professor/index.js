import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Professor';
import Markdown from '../../components/Markdown';
import Feature from '../../components/home/Feature';
import mhkim from '../../assets/images/people/prof.jpg'

export default (props) => {
  return (
    <Template>
    <div className="row">
        <div className="">
          <ul className="featured-list featured-list-bordered">
            <Feature
              imageSrc="folder"
              imageHeight="80px"
              imageMarginBottom="20px"
              title="YoonJoon Lee"
              description="Research Interest : "
            />
            <Feature
              imageSrc={mhkim}
              imageHeight="105px"
              imageWidth='95px'
              imageMarginBottom="20px"
              title="MyoungHo Kim"
              description="Research Interest : "
            />
          </ul>
        </div>
    </div>    </Template>
  );
};
