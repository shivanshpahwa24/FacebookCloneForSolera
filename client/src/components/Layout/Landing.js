import React from "react";
import Links from "../Links";
import AllPosts from "../AllPosts";
import Ads from "../Ads";

const Landing = () => {
  return (
    <div className="d-flex mt-5">
      <div className="row">
        <div className="col-12 col-sm-4 col-md-3 d-flex flex-column my-5 my-sm-2 my-md-0">
          <Links />
        </div>
        <div className="col-12 col-sm-8 col-md-6 my-5 my-sm-2 my-md-0">
          <AllPosts />
        </div>
        <div className="col-12 col-sm-8 col-md-3 text-white my-5 my-sm-2 my-md-0">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Landing;
