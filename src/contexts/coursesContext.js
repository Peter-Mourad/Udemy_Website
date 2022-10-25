import React from "react";

const CoursesContext = React.createContext();

const CoursesContextProvider = CoursesContext.Provider;
const CoursesContextConsumer = CoursesContext.Consumer;

export { CoursesContextConsumer, CoursesContextProvider, CoursesContext};