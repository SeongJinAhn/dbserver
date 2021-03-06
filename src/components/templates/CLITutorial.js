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
          <h1>CLI Tutorial</h1>
          <p>
            A tutorial for learning to create your own commands
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/tutorial/" />

            {/*<li className="doc-section">Steps</li>*/}
            {/*<NavLink title="1. Clone Starter Project" url="/hooks/tutorial/step-1/" />*/}
            {/*<NavLink title="2. Generate Hook" url="/hooks/tutorial/step-2/" />*/}
            {/*<NavLink title="3. Specify Dependencies" url="/hooks/tutorial/step-3/" />*/}
            {/*<NavLink title="4. Make Configurable" url="/hooks/tutorial/step-4/" />*/}
            {/*<NavLink title="5. Add Implementation" url="/hooks/tutorial/step-5/" />*/}
            {/*<NavLink title="6. Integrate Hook" url="/hooks/tutorial/step-6/" />*/}
            {/*<NavLink title="7. Publishing" url="/hooks/tutorial/step-7/" />*/}
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
