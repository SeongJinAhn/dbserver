import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Phd';
import Markdown from '../../components/Markdown';
import Feature from '../../components/home/Feature';

export default (props) => {
  return (
    <Template>
      <div className="row">
          <div className="">
            <ul className="featured-list featured-list-bordered">
              <Feature
                icon="folder"
                title="HyunJi Jung"
                description="Research Interest : "
              />
              <Feature
                imageSrc="folder"
                imageHeight="60px"
                imageMarginBottom="20px"
                title="JungHyuk Suh"
                description="Research Interest : "
              />
              <Feature
                imageSrc="folder"
                imageHeight="60px"
                imageMarginBottom="20px"
                title="KwangHee Lee"
                description="Research Interest : "
                url = "http://github.com/SeongJinAhn"
              />
            </ul>
          </div>
      </div>    </Template>
  );
};
