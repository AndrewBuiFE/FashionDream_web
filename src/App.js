import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./global.scss";
import TestComponent from "./test/TestComponent";
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
