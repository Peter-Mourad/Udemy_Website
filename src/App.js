import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";
import { CoursesContextProvider } from "./contexts/coursesContext";

import "./globalStyle.css";

function App() {
  const [coursesData, setCoursesData] = useState();
  const [reviews, setReviews] = useState();

  const fetchCourses = async () => {
    const res = await fetch(`http://localhost:8000/courses_data`);
    const json = await res.json();
    setCoursesData(json);
  };

  const fetchReviews = async () => {
    const res = await fetch(`http://localhost:8000/reviews`);
    const json = await res.json();
    setReviews(json);
  };

  useEffect(() => {
    fetchCourses();
    fetchReviews();
  }, []);

  if(coursesData && reviews){
    return (
      <CoursesContextProvider value= {{ coursesData, reviews }}>
        <div className="App">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/course/:ID" element={<SingleCourse />} />
          </Routes>
        </div>
      </CoursesContextProvider>
    );
  }
}

export default App;
