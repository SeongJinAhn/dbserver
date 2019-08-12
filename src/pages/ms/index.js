import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/ms';
import Markdown from '../../components/Markdown';
import Feature from '../../components/home/Feature';

export default (props) => {
  return (
    <Template>
      <div className="row">
          <div className="">
            <ul className="featured-list featured-list-bordered">
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/heesoo.jpg?raw=true"
                imageHeight="105px"
                imageMarginBottom="20px"
                title="HeeSoo Yoon"
                description="Research Interest : "
              />
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/gukwon.jpg?raw=true"
                imageHeight="105px"
                imageMarginBottom="20px"
                title="GukWon Ahn"
                description="Research Interest : "
              />
              <Feature
                imageSrc="https://github.com/SeongJinAhn/dbserver/blob/master/src/assets/images/people/seongjin.jpg?raw=true"
                imageHeight="105px"
                imageMarginBottom="20px"
                title="SeongJin Ahn"
                description="Research Interest : Recommendation, Machine Learning"
                cv = "http://github.com/SeongJinAhn"
              />
            </ul>
          </div>
      </div>    </Template>
  );
};
