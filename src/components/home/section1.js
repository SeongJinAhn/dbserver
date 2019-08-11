import React from 'react';
import mainPic1 from '../../assets/images/homepage/main.jpg';
import mainPic2 from '../../assets/images/homepage/main2.jpg';
import actionBlueprintsMobile from '../../assets/images/homepage/action-blueprints-mobile.png';
import actionBlueprints from '../../assets/images/homepage/action-blueprints.png';

export default (props) => {
  return (
    <div className="block block-secondary" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-sm-offset-2 text-center" style={{ paddingBottom: '20px' }}>
            <h3 className="m-t-0">
              About us
            </h3>
            <p className="lead m-b-md">
            The database laboratory was founded in 1984 at KAIST, Korea. This is one of the oldest database research laboratories in Korea. We have graduated more than 150 MS & PhD students until now. Our alumni are working hard in all kinds of areas such as leading IT companies, universities, military, goverment, and banks. We are doing research on database related fields such as lifelog management, graph data management and mining, query processing in sensor networks, data stream processing, semantic web data processing, and many more. We have conducted many research projects and published numerous research papers to various conferences and journals including top-level conferences such as SIGMOD, VLDB and ICDE. Please check out the research and publicasions pages to discover what we have done before and are doing now.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
            <img className="happy laboratory" src={mainPic1} style={{ width: '49.5%' }} />
            <img className="happy laboratory22" src={mainPic2} style={{ width:'50%' }} />
          </div>
        </div>

      </div>
    </div>
  );
}
