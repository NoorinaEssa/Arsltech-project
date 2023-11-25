// import React from 'react'
// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';


// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     gender: '',
//     country: '',
    
//     phone: ''
//   });
  

//   const { name, email, password, cpassword, gender, country, hobbies, phone } = formData;

//   const navigate=useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleHobbiesChange = (e) => {
//     const { value } = e.target;
//     setFormData({ ...formData, hobbies: [value] });
//   };

// {
//      toast('🦄 Submit successful!', {
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     onClose: () => {
//       setTimeout(() => {
//         navigate('/home');
//       }, 100);
//     },
//   });

//     // navigate("/home")
//     // console.log(formData);
//     // setTimeout(() => {
//     //   navigate('/home');
//     // }, 100);
    
//   };

//   const isPasswordMatch = password === cpassword;

//   return (
   
//     <form onSubmit={handleSubmit}>
//     <div className='row p-4 w-50 g-3 justify-content-center align-item-center'>
//       <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
//       <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
//       <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
//       <input type="password" name="cpassword" value={cpassword} onChange={handleChange} placeholder="Confirm Password" required />
//       {!isPasswordMatch && <p>Passwords do not match</p>}
//       <input type="text" name="gender" value={gender} onChange={handleChange} placeholder="Gender" required />
//       <select name="country" value={country} onChange={handleChange} required>
//         <option value="">Select Country</option>
//         <option value="Pakistan">Pakistan</option>
//         <option value="India">India</option>
//         <option value="China">China</option>
//         <option value="Malaysia">Malaysia</option>
//         <option value="Bangladish">Bangladish</option>
//         <option value="India">India</option>
      
//       </select>
//       <div>
//         Hobbies:
//         <label>
//           <input type="radio" name="hobbies" value="Reading" checked={hobbies.includes('Reading')} onChange={handleHobbiesChange} />
//           Reading
//         </label>
//         <label>
//           <input type="radio" name="hobbies" value="Cricket" checked={hobbies.includes('Cricket')} onChange={handleHobbiesChange} />
//           Cricket
//         </label>
//         <label>
//           <input type="radio" name="hobbies" value="Traveling" checked={hobbies.includes('Traveling')} onChange={handleHobbiesChange} />
//           Traveling
//         </label>
       
//       </div>
//       <input type="tel" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required />
//       <button class="btn btn-primary">Sign Up</button>
//       </div>
//       </form>
      
    
//   )
  
// }

// export default Signup
 

