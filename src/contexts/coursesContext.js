import React, {useState, useEffect} from "react";

const CoursesContext = React.createContext();

function CoursesContextProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const res = await fetch('http://localhost:8000/courses_data');
        const json = await res.json();
        setData(json);
    }
    fetchData();
  }, []);
  
  return (
    <CoursesContext.Provider value={{ data }}>
      { children }
    </CoursesContext.Provider>
  );
}

export { CoursesContext, CoursesContextProvider};