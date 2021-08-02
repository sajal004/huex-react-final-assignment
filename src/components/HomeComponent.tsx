import React, { useState } from 'react';
//import './BodyContainer.css';
import Courses from './Courses';
import CartDetails from './CartDetails';
import Course from '../data/Course';
import CourseInfo from './course/CourseInfo';

interface IState {
    course: {
      courseName: string
      trackLead: string 
      price: number
      index: number
    }[],
    activeIndex:{
        activeIndex: number 
    }
  }

  interface IProps {
    activeIndex:{
        activeIndex: number 
    }
  }

const HomeComponent = ({setSelectedMode1}) => {
     const [course, setCourse] = useState<IState["course"]>(Course)
     const[activeIndex, setActiveIndex] = useState<IState["activeIndex"]>({
        activeIndex: 0 
     })
     
     const [selectedMode, setSelectedMode] = useState('close')
     setSelectedMode1(selectedMode)

     let props = {
        course: course,
        activeIndex: activeIndex,
        selectedMode: 'close'
        }

    return(
        
        <div className="body-content">
            {/* <Courses {...props}/> */}
            {/* {selectedMode === 'close' && 
                <Courses setSelectedMode={setSelectedMode}/>
                && <CartDetails/>
            }
            {selectedMode === 'open' && <CourseInfo/>} */}

            <Courses setSelectedMode={setSelectedMode}/>
            <CartDetails/>
        </div>
    );
}
export default HomeComponent;