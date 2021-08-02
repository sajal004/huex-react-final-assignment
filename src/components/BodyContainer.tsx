import React, { useState } from 'react';
//import './BodyContainer.css';
import Courses from './Courses';
import CartDetails from './CartDetails';
import CourseInfo from './course/CourseInfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import HomeComponent from './HomeComponent';

interface IState {
    activeIndex:{
        activeIndex: number 
    }
  }


const BodyContainer = () => {

    const[activeIndex, setActiveIndex] = useState<IState["activeIndex"]>({
        activeIndex: 0 
     })
     const [selectedMode, setSelectedMode1] = useState('close')

    return(
        <Router>
        {/* <div className="body-content">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
        </div> */}
        <Switch>
            
            <Route path="/" exact>
                {/* <HomeComponent activeIndex={activeIndex}/> */}
                {selectedMode === 'close' && 
                <HomeComponent setSelectedMode1={setSelectedMode1}/>}
                 {selectedMode === 'open' && <CourseInfo/>}
                 
            </Route>
            <Route path="/about" exact>
                <div>{activeIndex.activeIndex}</div>
                <CourseInfo/>
            </Route>
        </Switch>
        </Router>
    );
}
export default BodyContainer;
