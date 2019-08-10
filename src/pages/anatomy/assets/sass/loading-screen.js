import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        /assets/sass/loading-screen.scss
      </h1>
      <p>
        The is the SCSS file that captures the behavior for the loading screen.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown type="css" text={`
      $loading-screen-background: #2595FF;
      $loading-screen-gradient-color-1: rgba(108, 91, 123, 0.8);
      $loading-screen-gradient-color-2: rgba(53, 92, 125, 0.8);
      $loading-screen-logo-size: 150px;

      @-webkit-keyframes logo-breathe {
        from {
          opacity: .2;
          filter: alpha(opacity=20)
        }
        to {
          opacity: 1;
          filter: alpha(opacity=100)
        }
      }

      @keyframes logo-breathe {
        from {
          opacity: .2;
          filter: alpha(opacity=20)
        }
        to {
          opacity: 1;
          filter: alpha(opacity=100)
        }
      }

      #loading-screen {
        background: $loading-screen-background;
        background-image: linear-gradient($loading-screen-gradient-color-1, $loading-screen-gradient-color-2);
        //background-image: radial-gradient($loading-screen-gradient-color-1, $loading-screen-gradient-color-2);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999999;
        opacity: 1;
        transition: opacity 0.75s ease;

        &.loading-screen-fade {
          opacity: 0;
        }

        &.loading-screen-hide {
          display: none;
        }

        .logo {
          position: absolute;
          background-image: url(../images/logo.png);
          height: $loading-screen-logo-size;
          width: $loading-screen-logo-size;
          background-size: $loading-screen-logo-size $loading-screen-logo-size;
          top: calc(50% - #{$loading-screen-logo-size/2});
          left: calc(50% - #{$loading-screen-logo-size/2});
        }

        .logo.breathe {
          animation-name: logo-breathe;
          animation-duration: 1.8s;
          animation-delay: .2s;
          animation-timing-function: cubic-bezier(.73, .005, .42, 1.005);
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }
      `}/>
    </Template>
  );
};
