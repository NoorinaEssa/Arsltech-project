import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='container-fluid nav1'>
    <div className='prenav'>
    <i class="fa-solid fa-phone icon mt-3"></i><p className='mt-3'>03041111774</p>
   <i class="fa-regular fa-envelope mail mt-3"></i><p className="mt-3">info@pnytrainings.com</p> 

 
<button className='btn btn-primary ml-4'>Fast Track Pro Bootcamps in 2023</button>
<div className='para'>

<Link to='' class="li">| Amazon Services</Link>
<Link to='' class="li">| Kids Courses</Link>
<Link to='' class="li">| Female Courses</Link>
<Link to='' class="li">| E-Flyers</Link>
<Link to='' class="li">| Training Schedule</Link>
<Link to='' class="li">| Fee Structure</Link>
<Link to='' class="li">|Admission |</Link>
<button className='bbtn border-white'><i class="fa-solid fa-diamond-turn-right"></i>Login</button>
<button className='bttn'>Enroll Now</button>
</div>
</div>
</nav>

  )
}

export default Nav