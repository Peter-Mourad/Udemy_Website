import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";
import { CoursesContextProvider } from "./contexts/coursesContext";

import "./globalStyle.css";

function App() {
  const [summary, setSummary] = useState();
  const [data, setData] = useState();
  const [reviews, setReviews] = useState();

  const fetchSummary = async () => {
    const res = await fetch(`http://localhost:8000/summary`);
    const json = await res.json();
    setSummary(json);
  };

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8000/data`);
    const json = await res.json();
    setData(json);
  };

  const fetchReviews = async () => {
    const res = await fetch(`http://localhost:8000/reviews`);
    const json = await res.json();
    setReviews(json);
  };

  useEffect(() => {
    fetchSummary();
    fetchData();
    fetchReviews();
  }, []);

  if(summary && data && reviews){
    return (
      <CoursesContextProvider value= {{ summary, data, reviews }}>
        <div className="App">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search/:courseName" element={<Home />} />
            <Route exact path="/course/:ID" element={<SingleCourse />} />
          </Routes>
        </div>
      </CoursesContextProvider>
    );
  }
}

export default App;
