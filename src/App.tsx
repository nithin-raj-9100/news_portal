/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }
