import React, { Suspense, lazy } from "react";
import "./Lazy.css";
const App = lazy(() => import("../App"));
function Lazycompo() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">LOADING</div>
          </div>
        }
      >
        <App />
      </Suspense>
    </div>
  );
}

export default Lazycompo;
