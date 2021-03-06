import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Pagination
      </h1>
      <p>
        Useful for moving through large datasets, and providing the user with a sliced view of the data.
      </p>

      <h3>
        Visualization
      </h3>
      <p>
        This video demonstrates what pagination looks like. Screenshots are from the <em>Simply Social</em> prototype
        that <a href="https://www.invisionapp.com/">Invision</a> provides you when you sign up for an account.
      </p>

      <Video videoId="JpztALTbySU" />

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have an API with a <code>/posts</code> endpoint, and you want to create an experience that lets a user browse
        through all the Posts. But there are a lot of posts, and they can't all be retrieved in a single request. Instead,
        you're going to need to retrieve the first page of results, and then fetch additional pages when the user wants to view
        them.
      </p>

      <p>
        So let's start by retrieving the first page of results. To do that you're going to pass a <code>pagination</code> clause to the
        <code>connect</code> call like this:
      </p>

      <Markdown text={`
      connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            pagination: {
              page: 1
            }
          })
        };
      })
      `}/>

      <p>
        Assuming your API server is located at <code>https://api.example.com</code>, this call will get transformed into the following
        network request:
      </p>

      <Markdown type="sh" text={`
      https://api.example.com/posts?page=1
      `}/>

      <p>
        Lore's default behavior is to convert the <code>pagination</code> clause into a query string. So if you passed in a second property
        to the <code>where</code> clause, like this:
      </p>

      <Markdown text={`
      pagination: {
        page: 1,
        pageSize: 20
      }
      `}/>

      <p>
        It would get converted into this network request:
      </p>

      <Markdown text={`
      https://api.example.com/posts?page=1&pageSize=20
      `}/>

      <blockquote>
        <p>
          <strong>Side Note</strong>
        </p>
        <p>
          You can also combine a <code>where</code> clause with <code>pagination</code> in order to paginate through
          the result of a query. To do that, create a <code>connect</code> call that looks like this:
        </p>
      <Markdown text={`
      connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: '123'
            },
            pagination: {
              page: 1
            }
          })
        };
      })
      `}/>
        <p>
          In this case, the final query parameters will be composed of both the <code>where</code> parameters and
          the <code>pagination</code> parameters, creating a network request that looks like this:
        </p>
      <Markdown text={`
      https://api.example.com/posts?authorId=123&page=1
      `}/>
      </blockquote>

      <p>
        Since it will take time for the network request to complete, let's focus on the component next. The component is going
        to receive a prop named <code>posts</code> containing the result of our request for data.
      </p>

      <Markdown text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            pagination: {
              page: 1
            }
          })
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        render() {
          var posts = this.props.posts;

          // todo: render the posts
        }
      };
      `}/>

      <p>
        Since our network request was just sent out, we won't have any data yet. So <code>posts</code> will look like this:
      </p>

      <Markdown text={`
      posts = {
        state: 'FETCHING',
        data: [],
        query: { pagination: { page: 1 } }
      }
      `}/>

      <p>
        We don't have any data to render yet, but the <code>query</code> field tells us what data we asked for, and the <code>state</code> field
        tells us that data is being fetched. So let's render a loading message while we're waiting for the data to return
        from the API server.
      </p>

      <Markdown text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: props.params.authorId
            }
          })
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        render() {
          var posts = this.props.posts;

          if (posts.state === PayloadStates.FETCHING) {
            return (
              <div>Loading posts...</div>
            );
          }

          // todo: render posts
        }
      };
      `}/>

      <p>
        After a time our network request will come back, the Redux store will be updated, and our component will be rerendered.
        But this time we'll actually have data, so our <code>posts</code> will look like this:
      </p>

      <Markdown text={`
      posts = {
        state: 'RESOLVED',
        data: [
          {
            id: '1',
            cid: 'c1',
            state: 'RESOLVED',
            data: {
              title: 'Bacon is yummy',
              authorId: '123'
            }
          },
          {
            id: '2',
            cid: 'c1',
            state: 'RESOLVED',
            data: {
              title: 'An ode to Bacon',
              authorId: '123'
            }
          }
        ],
        query: { pagination: { page: 1 } }
      }
      `}/>

      <p>
        The <code>state</code> value of <code>RESOLVED</code> let's you know that nothing is happening; the request has been resolved. And now, our
        <code>data</code> property contains an array of <code>Posts</code>. So let's render that array to display the first page of posts:
      </p>

      <Markdown text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          render: function() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <div>
                <ul>
                  {posts.data.map((post) => {
                    return (
                      <li key={post.id || post.cid}>
                        {post.data.title}
                      </li>
                    );
                  })}
                </ul>
                { /* todo: render pagination links */}
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        Next we need to render a way for the user to change which page of data they're looking at. For that, we're going to
        take advantage of <code>react-router</code> and render a couple navigation links below our list of posts:
      </p>

      <Markdown text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          render: function() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <div>
                <ul>
                  {posts.data.map((post) => {
                    return (
                      <li key={post.id || post.cid}>
                        {post.data.title}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <Link to={{ pathname: '/posts', query: { page: 1 } }} />
                  <Link to={{ pathname: '/posts', query: { page: 2 } }} />
                </div>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        Whenever the user clicks on these links, the browser URL will change and resemble something like this:
      </p>

      <Markdown text={`
      https://www.myapp.com/posts?page=2
      `}/>

      <p>
        And whenever the browser URL changes, our component will be rerendered, and will get the chance to request a new page
        of posts. However, right now the page of posts we're requesting is hard-coded to the first page. So let's change our
        <code>connect</code> call to get the page from the query parameter instead so that the data we request will match the application
        URL:
      </p>

      <Markdown text={`
      connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            pagination: {
              page: props.params.page
            }
          })
        };
      })
      `}/>

      <p>
        And now that the page of <code>posts</code> is being driven off the query parameter, all we need to do is change the browser URL
        and our data will automatically be updated.
      </p>

      <p>
        Now this example is still a little too simple still. In a real application, we won't want to hard-code the pagination
        links. Instead you would want to calculate the number of pages based on the total number of <code>Posts</code> in the API (something
        the API should tell you in the result set) divided by the number of Posts in each page. For example, if the API told
        you there were 102 Posts, and you were retrieving 20 posts per page of data, then you tell the user there are 6 pages
        of data. For an example of how to do this, see the <a href="https://github.com/lore/lore/tree/master/examples/pagination">pagination example</a>
        on GitHub.
      </p>

      <h3>
        Example Code
      </h3>
      <p>
        Example code showing how to paginate data.
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        connect(function(getState, props) {
            return {
              posts: getState('post.find', {
                where: {
                  authorId: props.params.authorId
                },
                pagination: {
                  page: props.location.query.page
                }
              })
            };
          })(
          createReactClass({

            propTypes: {
              posts: React.PropTypes.object.isRequired
            },

            renderPost: function(post) {
              return (
                <li key={post.id || post.cid}>
                  {post.data.title}
                </li>
              );
            },

            render: function() {
              var posts = this.props.posts;

              if (posts.state === PayloadStates.FETCHING) {
                return (
                  <div>Loading posts...</div>
                );
              }

              return (
                <ul>
                  {posts.data.map(this.renderPost)}
                </ul>
              );
            }
          })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        class Component extends React.Component {

          constructor(props) {
            super(props);
            this.renderPost = this.renderPost.bind(this);
          }

          renderPost(post) {
            return (
              <li key={post.id || post.cid}>
                {post.data.title}
              </li>
            );
          }

          render() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <ul>
                {posts.data.map(this.renderPost)}
              </ul>
            );
          }
        };

        Component.PropTypes = {
          posts: React.PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              },
              pagination: {
                page: props.location.query.page
              }
            })
          };
        })(Component);
        `}/>
        <CodeTab syntax="ESNext" text={`
        @connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              },
              pagination: {
                page: props.location.query.page
              }
            })
          };
        })
        class Component extends React.Component {

          static propTypes = {
            posts: React.PropTypes.object.isRequired
          };

          constructor(props) {
            super(props);
            this.renderPost = this.renderPost.bind(this);
          }

          renderPost(post) {
            return (
              <li key={post.id || post.cid}>
                {post.data.title}
              </li>
            );
          }

          render() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <ul>
                {posts.data.map(this.renderPost)}
              </ul>
            );
          }
        };
        `}/>
      </CodeTabs>

    </Template>
  )
};
