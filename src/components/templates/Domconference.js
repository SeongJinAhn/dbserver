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
          <h1>Domestic Conference</h1>
          <p>
            Since 2015
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="International Journal" url="/intjournal/" />
            <NavLink title="International Conference" url="/intconference/" />
            <NavLink title="Domestic Journal" url="/domjournal/" />
            <NavLink title="Domestic Conference" url="/domconference/" />


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
