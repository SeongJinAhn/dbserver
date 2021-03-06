import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookCollections';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Code
      </h1>
      <p>
        The source code for this hook can be
        found <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-collections">here</a>.
      </p>
    </Template>
  )
};
