import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

 export const Trainer = () => {
  return (
   <>
    <div className="trainer">
<div className='container'>
<h3>Our trainers certified from</h3>
<div className='images'>
<img src='https://www.pnytrainings.com/assets/images/adobe.png' alt='image1' height={"50px"}/>
<img src='https://www.pnytrainings.com/assets/images/autodesk.png' alt='image2' height={"50px"}/>
<img src='https://www.pnytrainings.com/assets/images/google.png' alt='image3' height={"50px"}/>
<img src='https://www.pnytrainings.com/assets/images/nbc.png' alt='image4' height={"50px"} />
<img src='https://www.pnytrainings.com/assets/images/us_ethics.png' alt='image5' height={"50px"} />
<img src='https://www.pnytrainings.com/assets/images/ios.png' alt='image6' height={"50px"}/>
</div>
<p>PNY Trainings is the<span> best IT training institution in Lahore </span>that conducts different training programs aimed at helping young career seekers understand the basic information technology functioning of the sector and the job role they aspire to take on. Their insight and vision have assisted us in enhancing the knowledge and skills of youngsters to take on modern-day corporate challenges. Getting a good start in a career is a cherished dream for every career candidate.</p>
<p>However, this is easier said than done especially in today's challenging career range. To achieve this dream basic college education is rarely enough, especially in Pakistan. Today's highly competitive and demanding employment market is looking for only talented and skilled manpower with enough command of the information technology industry essentials. To make a mark you must have the necessary knowledge, skills, and capability to provide to the specific industry you aspire to enter into an increase. This is equally true across domains of Technology,
 Business,<span>  Development,</span> and <span> Designing</span>, IT Software Development, Digital Marketing Courses, and many more.</p>
<p>One of the ways that you can gain an advantage over your contemporaries is to undergo courses offered by reputable training institutes in Lahore. There are so many seats available in Arfa Tower short courses and all you have to do is to enroll yourself in your desired course. PNY Trainings offers different courses in Lahore, Islamabad, Rawalpindi, Karachi, and other major cities of Pakistan.</p>
<p>PNYTrainings is one of the promising and Best IT Training institutes in Lahore that comes up with amazing courses, training, and almost all<span> short courses in Lahore</span>. We are the introducers to numerous IT trends, courses, and certifications in Lahore. The motive of the PNY Arfa Tower short courses is to provide the best courses with guaranteed results for everyone.
</p>

<p>
with our weekend classes in Lahore, we are the only training
 institute that gives the opportunity to learn new skills in <span>E-commerce </span>to all
  professionals and students. The flexible timings let them be part of new industry 
  trends and improve their skills to get better-paid jobs in our PNY Arfa Karim tower
   courses, For every single course we pay attention to the student ease and feasibility
    when it comes to class schedule, timings, course duration, content, and teaching method.
    </p>
    <p>
    When you are looking for an IT training institute in Lahore that offers <span>PITB Courses</span>, and all the next-level skill-based training then we are here. From our<span> graphic designing courses</span> to their content and even the training sessions, everything is designed precisely. We pay attention to market need, demand, and future scope of the skills while offering a course. Every single course is an addition to your skillset that will repay you in the coming future.
    </p>
</div>
</div>

{/*teaching_course*/}


<div className="teaching">
<div className="container d-flex justify-content-center align-item-center gap-5">



<div class="card-body text-center">
  <h5 class="card-title">Become an Instructor</h5>
  <p class="card-text">Teach what you love. PNY gives you the tools to create an online course.</p>
  <Link to="/" class="btnnnn">Start teaching</Link>
</div>


<div class="card-body text-center">
  <h5 class="card-title">PNY for Business</h5>
  <p class="card-text">Get unlimited access to 50+ courses for your team.</p>
  <Link to="/" class="btnnnn">Get PNY for Business</Link>
</div>
</div>
</div>

</>
  )
}

