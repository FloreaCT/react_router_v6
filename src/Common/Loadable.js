import React, { Suspence } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspence fallback={<div>Loading......</div>}>
      <Component {...props} />
    </Suspence>
  );

export default Loadable;
