import React from "react";
import {connect} from 'react-redux';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import WorkIn from "../components/WorkIn";
import Welcome from "../components/Welcome";
import Worklist from "../components/WorkList";
import WorkListItem from "../components/WorkListItem";

const Dashboard = ({jobs}) => {
  return (
    <>
      <Header />
      <div className="mt-6 container">
        <div className="dashboard">
          <div className="wokslis-home">
         {jobs.map(item =>
          <WorkIn key={item.id} {...item} />
          )}
          </div>
          <Welcome>
            <Worklist>
              <WorkListItem />
            </Worklist>
          </Welcome>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps  = state => {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps, null)(Dashboard)
