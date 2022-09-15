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

  const [summaryState, setSummaryState] = useState('fetching');
  const [dataState, setDataState] = useState('fetching');
  const [reviewsState, setReviewsState] = useState('fetching');

  const fetchSummary = async () => {
    try {
      const res = await fetch(`http://localhost:8000/summary`);
      const json = await res.json();
      setSummary(json);
      if (Object.keys(json).length)
        setSummaryState('fetched');
      else
        setSummaryState('failed');
    }
    catch {
      console.error('failed to fetch summary');
      setSummaryState('failed');
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/data`);
      const json = await res.json();
      setData(json);
      if (Object.keys(json).length)
        setDataState('fetched');
      else
        setDataState('failed');
    }
    catch {
      console.error('failed to fetch data');
      setDataState('failed');
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:8000/reviews`);
      const json = await res.json();
      setReviews(json);
      if (Object.keys(json).length)
        setReviewsState('fetched');
      else
        setReviewsState('failed');
    }
    catch {
      console.error('failed to fetch reviews');
      setReviewsState('failed');
    }
  };

  useEffect(() => {
    fetchSummary();
    fetchData();
    fetchReviews();
  }, []);

  console.log(summaryState);

  return (
    <CoursesContextProvider value={{ summary, data, reviews }}>
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Routes>
          <Route exact path="/" element={<Home summaryState={summaryState} />} />

          <Route exact path="/search/:courseName" element={<Home summaryState={summaryState} />} />

          <Route exact path="/course/:ID" element={<SingleCourse dataState={dataState} reviewsState={reviewsState} />} />
        </Routes>
      </div>
    </CoursesContextProvider>
  );
}

export default App;