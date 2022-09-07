import React from "react";

import Header from "../components/header/Header";
import NavigationBar from '../components/navbar/NavigationBar';
import CoursesSection from "../components/courses-section/CoursesSection";

import "../globalStyle.css";

const courses = require('../db.json').Courses;
    
function Home() {
    return (
        <>
            <NavigationBar />
            <Header />
            <CoursesSection data={ courses.Python} />
        </>
    );
}

export default Home;