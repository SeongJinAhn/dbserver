import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Publishing</h1>
          <p>
            Documentation for deploying your application
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/publishing/" />

            <li className="doc-section">Deploy Hosts</li>
            <NavLink title="Now" url="/publishing/providers/now/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Removing Now Support" url="/publishing/misc/removing-now/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
