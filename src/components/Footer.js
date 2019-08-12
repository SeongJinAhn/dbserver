import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  return (
    <div className="block block-inverse app-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h6 className="m-b text-uppercase">About</h6>
            <ul className="list-unstyled list-spaced">
              <li className="text-muted">
                KAIST E3-1 3416, 3408 <br></br>
                If you have any question, please ask it to {' '}
                <a href="mailto:kim.contact@dbserver.kaist.ac.kr" style={{ color: 'white' }}>@Lab ZZang</a> <br></br>
                made by <a href="http://github.com/SeongJinAhn" style={{ color: 'white' }}>@SeongJin Ahn</a> <br></br>
              </li>
            </ul>
          </div>

          <div className="col-sm-3 col-sm-offset-1">            
          </div>

          <div className="col-sm-3">
            <h6 className="m-b text-uppercase">Connect</h6>
            <ul className="list-unstyled list-spaced">
              <li className="text-muted">
                <a href="https://cs.kaist.ac.kr">CS</a>
              </li>
              <li className="text-muted">
                <a href="https://dbserver.kaist.ac.kr/wiki">For Lab Members</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
