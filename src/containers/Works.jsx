import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import WorkList from "../components/WorkList";
import WorkListItem from "../components/WorkListItem";

const Works = () => {
  return (
    <>
      <Header />
      <div className="mt-6 container">
        <WorkList>
          <WorkListItem />
          <WorkListItem />
          <WorkListItem />
        </WorkList>
      </div>
      <Footer />
    </>
  );
};

export default Works;
