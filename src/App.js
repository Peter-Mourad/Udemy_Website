import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";
import { CoursesContextProvider } from "./contexts/coursesContext";

import "./globalStyle.css";

function App() {
  return (
    <CoursesContextProvider>
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:courseID" element={<SingleCourse />} />
        </Routes>
      </div>
    </CoursesContextProvider>
  );
}

export default App;
