import React from "react";

import Header from "../components/header/Header";
import NavigationBar from '../components/navbar/NavigationBar';
import CoursesSection from "../components/courses-section/CoursesSection";
import Footer from "../components/footer/Footer";

import "../globalStyle.css";
    
function Home() {
    return (
        <>
            <NavigationBar />
            <Header />
            <CoursesSection />
            <Footer />
        </>
    );
}

export default Home;