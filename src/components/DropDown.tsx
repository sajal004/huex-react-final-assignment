import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import './DropDown.css';

const DropDown = () => {
    return(
        <div className="dropdown">
        <Dropdown>
        <Dropdown.Toggle>
            <div className='price'>
              <img src="/images/course_price.png" alt="course price"></img>
            </div>
            
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
            <div className='option-list'>
            <Dropdown.Item href="#" className='options'>Low to High</Dropdown.Item>
            <hr></hr>
            <Dropdown.Item href="#" className='options'>High to Low</Dropdown.Item>
            </div>
            
        </Dropdown.Menu>
        </Dropdown>
    </div>
    );
}
export default DropDown;