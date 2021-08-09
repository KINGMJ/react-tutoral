import React, { Suspense } from "react";
// import OtherComponent from "../components/demo11/OtherComponent";

const OtherComponent = React.lazy(() =>
  import("../components/demo11/OtherComponent")
);

const Demo10 = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
};

export default Demo10;
