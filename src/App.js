import React from "react";

import Header from "./components/header/Header";
import NavigationBar from './components/navbar/NavigationBar';
import CoursesSection from "./components/courses-section/CoursesSection";
import "./globalStyle.css";

const courses = require('./db.json').Courses;

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className="App">
        <NavigationBar />
        <Header />
        <CoursesSection data={ courses.Python} />
      </div>
    </>
  );
};

export default App;
