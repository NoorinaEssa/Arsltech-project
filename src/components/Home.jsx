import React from 'react'
import './Home.css'
import { Link, Route } from 'react-router-dom'
import FeaturedCourses from './FeaturedCourses'
import { Testimonials } from './Testimonials'
import {Trainer} from './Trainer'
import Footer from './Footer'
import './FooterStyles'

const Home = () => {
  return (
    <>

    <div class="container-fluid">
    <div class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
 <img src="data:image/png;base64,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"
  alt='' className='img'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-table-cells"></i>Catergories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">PNY
            Google Scholarship Certification</a></li>
            <li><a class="dropdown-item" href="#">One year diploma</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">PNY
            Google Scholarship Certification</a></li>
            <li><a class="dropdown-item" href="#">One year diploma</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
           
          </ul>
        </li>
         </ul>
         <input type="text" name="q" className="search" placeholder="Search for the software or skills you want to learn Q" />

         <div className='para1 d-flex'>
         <Link to="/" className='li text-black'>About Us</Link>
         <Link to="/" className='li text-black'>Career</Link>
         <Link to="/" className='li text-black'>Blogs</Link>
       </div>
     <form class="d-flex">
        <button class="bbbtn w-100" type="submit">PNY Conference 2024</button>
      </form>
    </div>
  </div>
</div>

                 {/*home-page */}

<div class="land">
<div class="front-img">
<img src='https://www.pnytrainings.com/assets/uploads/slider/home-slider-1692706119-sms.png' alt=''>
</img>
</div>
</div>
<div class="card-section">
<div class="container d-flex">

 
  <div class="card-body">
   <img src="https://www.pnytrainings.com/assets/images/01.png" class="card-img-top" alt="..."/>
    <h6 class="card-title text-center">Unlimited Access</h6>
    <p class="card-text text-center">Choose What you’d like to learn from our extensive subscription library..</p>

  </div>
 
  <div class="card-body">
  
   <img src="https://www.pnytrainings.com/assets/images/02.png" class="card-img-top" alt=""/>
    <h6 class="card-title text-center">Learn Anywhere</h6>
    <p class="card-text text-center">Learn from industry experts who are passionate about teaching..</p>
    <Link to="#" class="btn btn-bg-primary">Start My Free Trial</Link>
  </div>
  

  <div class="card-body">
  
  <img src="https://www.pnytrainings.com/assets/images/03.png" class="card-img-top" alt=""/>
    <h6 class="card-title text-center">Customizability</h6>
    <p class="card-text text-center">Switch between your computer, tablet, or mobile device..</p>

  </div>
  
  
</div>
</div>
</div>


                      {/*StartLearning*/ }


<div class="learning-section">

<h2 className='start'>Start Learning</h2>
<div className='container d-flex justify-content-evenly align-items-center gap-4 mt-5'>
<div class="card" style={{ width: '23rem' }}>
 
  <div class="card-body">
    <h5 class="card-title">Development</h5>
    <p class="card-text">By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write..</p>
    <button to="/">View course</button>
  </div>
</div>
<div class="card" style={{ width: '23rem' }}>
 
  <div class="card-body">
    <h5 class="card-title">Marketing</h5>
    <p class="card-text">Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic-...</p>
    <button to="/">View course</button>
  </div>
</div>
<div class="card" style={{ width: '23rem' }}>

  <div class="card-body">
    <h5 class="card-title">Art & Design</h5>
    <p class="card-text">Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...</p>
  <button to="/">View course</button>
  </div>
  </div>
</div>


<div className='container d-flex justify-content-evenly align-items-center gap-4 mt-3'>
<div class="card" style={{ width: '23rem' }}>
 
  <div class="card-body">
    <h5 class="card-title">IT & Software</h5>
    <p class="card-text">Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and softw...</p>
    <button to="/">View course</button>
  </div>
</div>
<div class="card" style={{ width: '23rem' }}>
 
  <div class="card-body">
    <h5 class="card-title">Business & Accounts</h5>
    <p class="card-text">Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</p>
    <button to="/">View course</button>
  </div>
</div>
<div class="card" style={{ width: '23rem'}}>

  <div class="card-body">
    <h5 class="card-title">Multimedia</h5>
    <p class="card-text">Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills....</p>
  <button to="/">View course</button>
  </div>
  </div>
</div>
<button className='button' to='/'>Browse Courses</button>

</div>


 {/*features courses*/ }
<FeaturedCourses />





 {/*upcoming Events*/}
 <div className="upcoming">
  <h2 className='event'>UPCOMING EVENTS</h2>
  <div className="col-lg-12 container d-flex ">
  <div className="col-lg-6">
  <div className="card" style={{ width: '33rem' }}>
    <div className="card-body">
      <img src="https://www.pnytrainings.com/assets/uploads/event/event-1683803786-sms.png" className="card-img-top" alt="..." />
      <p className="text">Become a Professional Photographer (Beginner to Pro)</p>
      <p className="june mt-0">Jun 24, 2023</p>
      <Link to="" className="read mb-4 text-decoration-none">Read More</Link>
    </div>
  </div>
</div>
    <div className="col-lg-6">
      <div className="card" style={{ width: '33rem' }}>
        <div className="card-body">
          <img src="https://www.pnytrainings.com/assets/uploads/event/event-1683799340-sms.png" className="card-img-top" alt="..." />
          <p className="text">The Complete Guide To Amazon Dropshipping</p>
          <p className="june mt-0">Jun 29, 2023</p>
          <Link to="" className="read mb-4 text-decoration-none">Read More</Link>
        </div>
      </div>
    </div>
    
  </div>
  <div className="card3">
   <div className="col-lg-6 mt-2">
  <div className="card" style={{ width: '33rem' }}>
    <div className="card-body">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFw40T-UAloqBmAqOSk0QRi-vPcS9OdQvj_qIEnv_omxJzy6t9U9FJuVSGnFzC1TzzNDI&usqp=CAU" className="card-img-top" alt="..." />
      <p className="text">Analyzing & Visualizing Data with Microsoft Power BI</p>
      <p className="june mt-0">Jun 15, 2023</p>
      <Link to="" className="read mb-5 text-decoration-none">Read More</Link>
    </div>
  </div>
</div>
</div> 
<div className="card4">
<div className="col-lg-6 mt-2">
<div className="card" style={{ width: '33rem' }}>
 <div className="card-body">
   <img src="https://www.pnytrainings.com/assets/uploads/event/event-1680851545-sms.png" className="card-img-top" alt="..." />
   <p className="text">Learn WordPress Full Customization (Create Your Own Website) RWP</p>
   <p className="june mt-0">May 18, 2023</p>
   <Link to="" className="read mb-5 text-decoration-none">Read More</Link>
 </div>
</div>
</div>
</div> 

<button className='button pt-1' to='/'>View All Events</button>

</div>

{/*skills*/}
<div className='skills'>
<div class="card-section1">
<h3>why skills share?</h3>
<div class="container d-flex">

<img src="https://www.pnytrainings.com/assets/images/commercial-development-management.png" class="card-img-top1" alt="..."/>
  <div class="card-body">
  
    <h6 class="card-title text-center">Connect with Peers</h6>
    <p class="card-text text-center">Choose What you’d like to learn from our extensive subscription library..</p>

  </div>
  <img src="https://www.pnytrainings.com/assets/images/253447-200.png" class="card-img-top1" alt=""/>
  <div class="card-body">
    <h6 class="card-title text-center">Learn by Doing</h6>
    <p class="card-text text-center">Learn from industry experts who are passionate about teaching..</p>
    
  </div>
  
  <img src="https://www.pnytrainings.com/assets/images/94238-200.png" class="card-img-top1" alt=""/>
  <div class="card-body">
  
 
    <h6 class="card-title text-center">Be Future Proof</h6>
   
    <p class="card-text text-center">Switch between your computer, tablet, or mobile device..</p>

  </div>
  
  
</div>
</div>
</div>


{/*Testimonials*/}

<Testimonials />
{/*Testimonials*/}



{/*trainers*/}

<Trainer />
{/*trainers*/}

{/*footer*/}
<Footer />

  


</>
  )
}

export default Home