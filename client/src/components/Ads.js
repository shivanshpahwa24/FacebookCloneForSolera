import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <Fragment>
      <h3>Ads</h3>
      <div>
        Icons made by <Link>Pixel Perfect</Link> from{" "}
        <Link>www.flaticons.com</Link>
      </div>
      <br />
      <div>
        Icons made by <Link>Free pik</Link> from <Link>www.flaticons.com</Link>
      </div>
    </Fragment>
  );
};

export default Ads;
