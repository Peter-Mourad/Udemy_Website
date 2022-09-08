import React from "react";

import Header from "../components/header/Header";
import NavigationBar from '../components/navbar/NavigationBar';
import CoursesSection from "../components/courses-section/CoursesSection";

import "../globalStyle.css";
    
function Home() {
    return (
        <>
            <NavigationBar />
            <Header />
            <CoursesSection />
        </>
    );
}

export default Home;