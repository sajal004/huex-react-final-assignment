import React from 'react';
import './CourseInfo.css';
import Alert from 'react-popup-alert'

const CourseInfo = () => {

    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })
    
      function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Course successfully added in the cart',
          show: true
        })
      }

    return(
        <div>
            <div className='course-info-header'>
                <span >All Courses  &gt;  Responsive Design Course</span>
            </div>
            <div className='course-info-banner'>
                <div className='course-info-title'>
                    Responsive Design Course XYZ How to design responsive templates
                </div>
                <div className='course-info-subtitle'>
                    Responsive Design Course XYZ How to design responsive templates
                </div>
                <div className='course-info-tracklead'>
                    Joseph Marie
                </div>
                <div className='course-info-react'>
                    <span><button>React</button></span>
                    <span><button>React</button></span>
                    <span><button>React</button></span>
                </div>
            </div>
            <div className='course-info-content'>
                <div className='course-info-details'>
                    <p className='font-bold'>Course Details</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <div className='video'>
                        <img src="/images/playbutton.png" alt="playbutton"></img>
                    </div>
                    <div className='price-details'>
                        <div className='price-details-content'>
                            <div className='pricetag'>
                                Rs 563/-
                            </div>
                            <div className='striked-price'>
                                Rs 923/-
                            </div>  
                            <div className='time-left-for-price'>
                                <div className='clock'>
                                    <img src="/images/clock.png" alt="clock"></img>
                                </div>
                                <div className='time-left'>
                                    8 hours left for this price
                                </div>
                            </div>
                            <div className='price-details-buttons'>
                                    <button className='cartbutton' onClick={()=> onShowAlert('success')}><img src="/images/addToCart.png" alt="addToCart"></img></button>
                                    <button className='wishlistbutton'>ADD TO WISHLIST  <img src="/images/wish-list.png" alt="wish-list"></img></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Alert
                header={''}
                btnText={'Close'}
                text={alert.text}
                type={alert.type}
                show={alert.show}
                onClosePress={onCloseAlert}
                pressCloseOnOutsideClick={true}
                showBorderBottom={true}
                alertStyles={{}}
                headerStyles={{}}
                textStyles={{}}
                buttonStyles={{}}
             />
            
        </div>
    );
}
export default CourseInfo;