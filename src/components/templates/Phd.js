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
          <h1>Ph.D Students</h1>
          <p>
            The members of KAIST DBserver Lab.
          </p>

        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="HyunJi Jung" url="/phd/" />
            <NavLink title="JungHyuck Suh" url="/phd/" />
            <NavLink title="KwangHee Lee" url="/phd/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
