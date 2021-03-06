import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/fetching/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Fetching Data: Overview
      </h1>
      <p>
        In this section we'll be replacing our mock data with real data fetched from the API.
      </p>
      <p>
        At the end of this section your application will look like this:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-1/">tell Lore where our API server is located</Link>.
      </p>
    </Template>
  )
};
