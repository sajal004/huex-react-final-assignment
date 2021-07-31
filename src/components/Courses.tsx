import React, { useState } from 'react';
import './Courses.css';
import DropDown from './DropDown'


interface IProps {
    course: {
      courseName: string
      trackLead: string 
      price: number
    }[]
  }

const Courses: React.FC<IProps> = ({course}) => {

    const renderList = (): JSX.Element[] => {
        return course.map((course)=> {
            return(
                <div className="List">
                    <div className="List-header">
                        <div className="List-img"></div>
                        <div className= "List-courseName">{
                            course.courseName}
                            <div className="reactButton-div">
                                <img src="/images/Group.png" alt="react"></img>
                                <img src="/images/Group.png" alt="react"></img>
                            </div>
                        </div>
                    </div>
                    <p className="trackLead">{course.trackLead}</p>
                    <div className="List-star">
                        <img src="/images/star.png" alt="star"></img>
                    </div>
                    <p className="List-price">Rs {course.price}/-</p>
                    <p className="List-lastPrice">-</p>
                    <div className="addToCart">
                        <button>ADD To CART</button>
                    </div>
                    <div className="arrow">
                    <img src="/images/right-arrow.png" alt="arrow"></img>
                    </div>
                </div>
        )
        }) 
    }

    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

    return(
        <div>
            <div className='course-header'>
                <span className='all-courses'>All Courses</span>
                <DropDown/>
            </div>
            {renderList()}
        </div>
    );
}
export default Courses;