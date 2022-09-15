import SidebarContainer from "../components/sidebar-container/SidebarContainer";
import NavigationBar from "../components/navbar/NavigationBar";
import TopContainer from "../components/top-container/TopContainer";
import SingleCourseBody from "../components/single-course-body/SingleCourseBody";
import Footer from "../components/footer/Footer";
import ErrorPage from "../pages/ErrorPage";

import { Backdrop, CircularProgress } from "@mui/material";

function SingleCourse({ dataState, reviewsState }) {
    if (dataState === "failed" || reviewsState === "failed") {
        return <ErrorPage />
    }

    const backdrop = <Backdrop
        sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
    >
        <CircularProgress color="inherit" />
    </Backdrop>;

    return (
        <>
            <NavigationBar />
            {(dataState === "fetching") ? 
                backdrop : 
                <>
                    < SidebarContainer />
                    <TopContainer />
                    {(reviewsState === "fetching") ? backdrop : <SingleCourseBody />}
                    <Footer />
                </>
            }
        </>
    );
}

export default SingleCourse;