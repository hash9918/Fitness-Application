// import React from 'react';
// import banner2 from "../../../assets/home/banner-2.jpg"
// const Hero2 = () => {
//     return (
//         <div className='min-h-screen  bg-cover' style={{ backgroundImage:  `url(${banner2})` }}>
//             <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
//                 <div className="">
//                     <div className="space-y-4">
//                         <h3 className='md:text-4xl text-2xl'>WE PROVIDES</h3>
//                         <h1 className='md:text-7xl text-4xl font-bold '>Super Creative Support</h1>
//                         <div className="md:w-1/2">
//                             <p className=''>We offered Super creative support. Such on help ye some door if in. Laughter proposal laughing any son law consider.</p>
//                         </div>
//                         <div className="flex flex-wrap items-center gap-5">
//                             <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Today</button>
//                             <button className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>View Courses</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero2;

import React from "react";

import bgImg from "../../../assets/home/banner-2.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleClassesClick = () => {
    navigate("/classes");
  };
  return (
    <div
      className="min-h-screen bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60 ">
        <div className=" space-y-4 ">
          <p className=" md:text-4xl text-2xl ">We provide </p>
          <h1 className="md:text-7xl text-4xl font-bold">
            {" "}
            Best Fitness course Online
          </h1>
          <div className="md:w-1/2">
            <p className="">
              Welcome to FastFitness, your ultimate destination for fitness
              enthusiasts! Whether you're a seasoned athlete or just starting
              your fitness journey, our platform offers everything you need to
              achieve your health and wellness goals. From personalized workout
              plans and nutrition guidance to expert tips and community support,
              we're here to empower you every step of the way. Explore our
              diverse range of workout routines, discover delicious and
              nutritious recipes, and connect with like-minded individuals who
              share your passion for living a healthy lifestyle.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={handleLoginClick}
              className="bg-secondary font-bold uppercase px-7 py-3 rounded-lg "
            >
              Join Today
            </button>
            <button
              onClick={handleClassesClick}
              className=" font-bold border  uppercase px-7 py-3 hover:bg-secondary rounded-lg"
            >
              View course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
