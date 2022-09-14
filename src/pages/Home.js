import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import NavigationBar from '../components/navbar/NavigationBar';
import CoursesSection from "../components/courses-section/CoursesSection";
import Footer from "../components/footer/Footer";

import "../globalStyle.css";
    
function Home() {
    const { courseName } = useParams();

    return (
        <>
            <NavigationBar />
            <Header />
            <CoursesSection searchText={ courseName || ''} />
            <Footer />
        </>
    );
}

export default Home;