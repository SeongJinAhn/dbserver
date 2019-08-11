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
          <h1>Professor</h1>
          <p>
            The members of KAIST DBserver Lab.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="YoonJoon Lee" url="/professor/" />
            <NavLink title="MyoungHo Kim" url="/professor/" />

          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
