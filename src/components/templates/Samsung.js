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
          <h1>Samsung Project</h1>
          <p>
            The project of KAIST DBserver Lab.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="JungHyuk Suh" url="/samsung/" />
            <NavLink title="TaeWook Ha" url="/samsung/" />

            {/*<li className="doc-section">Section</li>*/}
            {/*<NavLink title="React Router" url="/libraries/react-router/" />*/}
            {/*<NavLinkPlaceholder title="Something" />*/}
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
