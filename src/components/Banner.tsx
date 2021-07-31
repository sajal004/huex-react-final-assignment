import React from 'react';
import './Banner.css';

const Banner = () =>{
    return(
        <div className="banner">
            <div className="banner-text"> 
                Discover Latest Courses on React 
            </div>
            
            <img src="/images/banner.png" alt="banner"></img>
        </div>

    );
}
export default Banner;