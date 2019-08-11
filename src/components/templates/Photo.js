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
          <h1>Photo</h1>
          <p>
            The memories of KAIST DBserver Lab.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="2019" url="/photo/" />
            <NavLink title="2018" url="/photo/" />
            <NavLink title="2017" url="/photo/" />
            <NavLink title="2016" url="/photo/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
