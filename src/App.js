import React from "react";

import NavigationBar from './components/navbar/NavigationBar';
import CardsContainer from './components/cards-container/CardsContainer';

const courses = require('./db.json').Courses;

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className="App">
        <NavigationBar />
        <CardsContainer data={courses.Python} />
      </div>
    </>
  );
};

export default App;
