import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Professor';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        YoonJoon Lee
      </h1>
      <p>
        Lore uses <a href="http://dbserver.kaist.ac.kr/~yjlee/">React</a> as the component library.
      </p>
      <h1>
        Myoung Ho Kim
      </h1>
      <p>
        Lore uses <a href="http://dbserver.kaist.ac.kr/~mhkim/">React</a> as the component library.
      </p>

    </Template>
  );
};
