import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreExtractAction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        get
      </h1>
      <p>
        CLI command to extract the <Link to="/actions/get/">get action</Link> for a given model into
        your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract action [model]/get
      `}/>

      <h3>
        Example
      </h3>

      <Markdown type="sh" text={`
      lore extract action post/get
      `}/>

      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, payload, normalize } from 'lore-utils';

      /*
       * Blueprint for Get method
       */
      export default function get(modelId, query = {}) {
        return function(dispatch) {
          const Model = lore.models.post;
          const model = new Model({
            id: modelId
          });

          model.fetch({
            data: query
          }).then(function() {
            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            const actions = normalize(lore, 'post').model(model);

            dispatch({
              type: ActionTypes.update('post'),
              payload: payload(model, PayloadStates.RESOLVED)
            });

            // dispatch any actions created from normalizing nested data
            actions.forEach(dispatch);
          }).catch(function(response) {
            const error = response.data;

            if (response.status === 404) {
              dispatch({
                type: ActionTypes.update('post'),
                payload: _.merge(payload(model), {
                  state: PayloadStates.NOT_FOUND,
                  error: error
                })
              });
            } else {
              dispatch({
                type: ActionTypes.update('post'),
                payload: payload(model, PayloadStates.ERROR_FETCHING, error)
              });
            }
          });

          return dispatch({
            type: ActionTypes.add('post'),
            payload: payload(model, PayloadStates.FETCHING)
          });
        };
      };
      `}/>
    </Template>
  )
};
