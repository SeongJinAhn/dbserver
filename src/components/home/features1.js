import React from 'react';
import Feature from './Feature';
import reduxLogo from '../../assets/images/logos/redux-logo.png';
import reactLogo from '../../assets/images/logos/react-logo.png';
import reactRouterLogo from '../../assets/images/logos/react-router-logo.png';
import webpackLogo from '../../assets/images/logos/webpack-logo.png';

export default (props) => {
  return (
    <div className="block block-secondary" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
      <div className="container">

        <div className="row" style={{ paddingTop: '32px', paddingBottom: '24px' }}>
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <h3 className="m-t-0">
              Ongoing Projects
            </h3>
            <p className="lead m-b-md">
            We have recently worked on include lifelog management, query processing in wireless sensor networks, data stream processing, heterogeneous DB integration, business process management, Semantic Web, spatial data management, large knowledgebase processing, XML data management, and data warehousing/OLAP. A few R&D issues we currently focus on are described in more detail below.            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                icon="folder"
                title="Samsung Project"
                description="Easily create new projects using Lore's CLI, preconfigured with everything you need to get started building React applications."
                url="/samsung/"
              />
              <Feature
                imageSrc={reduxLogo}
                imageHeight="60px"
                imageMarginBottom="20px"
                title="KEPCO"
                description="Lore uses conventions to provide overridable blueprints for actions and reducers, along with a decorator that allows components to declare the data they need."
                url="/kepco/"
              />
            </ul>
          </div>

          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                imageSrc={reactLogo}
                imageHeight="64px"
                imageMarginBottom="14px"
                title="KEPCO"
                description="Lore automatically mounts the application to the DOM, and subscribes the app to the store so components automatically update when data changes."
                url="/kepco/"
              />
              <Feature
                imageSrc={reactRouterLogo}
                imageHeight="30px"
                imageMarginBottom="16px"
                title="Bio Prject"
                description="React-router preintegrated into project, easily configured, and routes are clearly exposed at the root of the project."
                url="/bio/"
              />
            </ul>
          </div>

          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                imageSrc={webpackLogo}
                imageHeight="64px"
                imageMarginBottom="14px"
                title="Bio Project"
                description="Common loaders pre-installed in config with a modular setup that allows you to override the Webpack config on a per-environment basis."
                url="/bio/"
              />
              <Feature
                icon="cloud"
                title="Publishing"
                description={(
                  <span>
                    Provides a built-in (but easily deleted) script for publishing to <a href="https://zeit.co/now">Now</a>, an excellent static hosting provider that provides free SSL certs and enables zero-downtime deploys.
                  </span>
                )}
                url="/publishing/"
              />
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
