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
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/hyunji.jpg?raw=true"
                imageHeight="105px"
                imageWidth='90px'
                imageMarginBottom="20px"
                title="HyunJi Jung"
                description="Research Interest : "
              />
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/junghyuk.jpg?raw=true"
                imageHeight="105px"
                imageWidth='90px'
                imageMarginBottom="20px"
                title="JungHyuk Suh"
                description="Research Interest : "
              />
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/kwanghee.jpg?raw=true"
                imageHeight="105px"
                imageWidth='90px'
                imageMarginBottom="20px"
                title="KwangHee Lee"
                description="Research Interest : "
              />
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/taewook.jpg?raw=true"
                imageHeight="105px"
                imageWidth='90px'
                imageMarginBottom="20px"
                title="Taewook Ha"
                description="Research Interest : "
              />
            </ul>
          </div>
      </div>    </Template>
  );
};
