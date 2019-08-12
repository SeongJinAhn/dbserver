import React from 'react';
import Layout from '../Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Series Data Analysis</h1>
          <p>
            The research area of KAIST DBserver Lab.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
