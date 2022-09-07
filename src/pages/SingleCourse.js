import SidebarContainer from "../components/sidebar-container/SidebarContainer";
import NavigationBar from "../components/navbar/NavigationBar";
import TopContainer from "../components/top-container/TopContainer";
import SingleCourseBody from "../components/single-course-body/SingleCourseBody";

function SingleCourse() {
    return (
        <>
            <NavigationBar />
            <SidebarContainer />
            <TopContainer />
            <SingleCourseBody />
        </>
    );
}

export default SingleCourse;