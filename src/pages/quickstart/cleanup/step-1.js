import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/infinite-scrolling/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Remove Parsing
      </h1>

      <p>
        In this step we'll refactor our code so that we can remove the <code>parse()</code> method we added to
        get our application to work after setting up the real API.
      </p>
      <p>
        While we could continue to use the <code>parse()</code> method, refactoring our code will make some of the
        later steps a little simpler.
      </p>

      <QuickstartBranch branch="cleanup.1" />

      <h3>
        Refactor Tweet Component
      </h3>
      <p>
        To start, open the <code>Tweet</code> component. Locate the <code>connect</code> call and
        replace <code>userId</code> with <code>user</code>, like this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Tweet.js
        connect(function(getState, props) {
          const { tweet } = props;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Tweet.js
        export default connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(Tweet);
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Tweet.js
        @connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        });
        `}/>
      </CodeTabs>

      <p>
        With this change, we've removed the dependency we had on the <code>userId</code> attribute from
        the <code>json-api</code> server, and no longer have a reason for our custom <code>parse()</code> method.
      </p>

      <h3>
        Remove Parse from Tweet Model
      </h3>
      <p>
        Next open <code>src/components/tweet.js</code> and locate the <code>parse()</code> method that currently
        looks like this:
      </p>
      <Markdown type="jsx" text={`
      // src/models/tweet.js
      export default {
        ...
        properties: {
          parse: function(response, options) {
            response.userId = response.user;
            return response;
          }
        }
        ...
      }
      `}/>
      <p>
        Since we no longer need it, delete the function, or convert it back to it's commented out default, like this:
      </p>
      <Markdown text={`
      // src/models/tweet.js
      export default {
        ...
        properties: {
          // parse: function(response, options) {
          //  return response;
          // }
        }
        ...
      }
      `}/>

      <p>
        With these changes, your application should still work.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should look like this (exactly the same):
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Tweet.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';

        export default connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(
        createReactClass({
          displayName: 'Tweet',

          propTypes: {
            tweet: PropTypes.object.isRequired,
            user: PropTypes.object.isRequired
          },

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';

        class Tweet extends React.Component {

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        }

        Tweet.propTypes = {
          tweet: PropTypes.object.isRequired,
          user: PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(Tweet);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';

        @connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })
        class Tweet extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired,
            user: PropTypes.object.isRequired
          };

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        }

        export default Tweet;
        `}/>
      </CodeTabs>

      <h3>
        src/models/tweet.js
      </h3>

      <Markdown text={`
      export default {

      };
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to add dialogs to our application <Link to="../../dialogs/overview/">so we can create,
        update and delete tweets</Link>.
      </p>
    </Template>
  )
};
