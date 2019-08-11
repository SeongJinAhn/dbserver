import React from 'react';
import Video from '../Video';

export default (props) => {
  return (
    <div className="block block-inverse app-header" style={{ paddingBottom: '64px' }}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="block-title m-b-sm">KAIST Database Laboratory</h1>
              <p className="lead m-b-md text-muted">
                We are One
                <br/>
                Since <strong>1984</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
