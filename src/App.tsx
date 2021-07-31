import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Courses from './components/Courses';
import CartDetails from './components/CartDetails';


interface IState {
  course: {
    courseName: string
    trackLead: string 
    price: number
  }[]
}

function App() {

  const [course, setCourse] = useState<IState["course"]>([
    {
      courseName: "Responsive Design Course XYZ How to design responsive templates",
      trackLead: "Joseph Marie",
      price: 563
    },
    {
      courseName: "Responsive Design Course XYZ How to design responsive templates",
      trackLead: "Joseph Marie",
      price: 563
    },
    {
      courseName: "Responsive Design Course XYZ How to design responsive templates",
      trackLead: "Joseph Marie",
      price: 563
    },
    {
      courseName: "Responsive Design Course XYZ How to design responsive templates",
      trackLead: "Joseph Marie",
      price: 563
    },
    {
      courseName: "Responsive Design Course XYZ How to design responsive templates",
      trackLead: "Joseph Marie",
      price: 563
    }
  ])
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="body-content">
        <Courses course={course}/>
        <CartDetails/>
      </div>
      
      
      

    </div>
  );
}

export default App;
