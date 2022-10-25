import React from "react";
import { useParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material"; 

import Header from "../components/header/Header";
import NavigationBar from '../components/navbar/NavigationBar';
import CoursesSection from "../components/courses-section/CoursesSection";
import Footer from "../components/footer/Footer";
import ErrorPage from "../pages/ErrorPage";

import "../globalStyle.css";
    
function Home({summaryState}) {
    const { courseName } = useParams();

    if (summaryState === "failed")
        return <ErrorPage />;
    
    const backdrop = <Backdrop
        sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
    >
        <CircularProgress color="inherit" />
    </Backdrop>;

    return (
        <>
            <NavigationBar />
            {
                (summaryState === "fetching") ? backdrop :
                <>
                    <Header />
                    <CoursesSection searchText={ courseName || ''} />
                    <Footer />
                </>
            }
        </>
    );
}

export default Home;