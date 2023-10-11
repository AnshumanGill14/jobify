import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
            Welcome to Jobify! <br />

            At Jobify, we are committed to connecting job seekers with their dream careers and helping employers find the perfect talent to drive their businesses forward. Our mission is to simplify the job search process, making it easier, faster, and more effective for both job seekers and employers.
            Over the years, we've grown and evolved, expanding our reach and services to meet the ever-changing needs of job seekers and employers. Today, we proudly serve millions of users across the globe, connecting them with opportunities that align with their skills, passions, and ambitions.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify '>
        <p>
          At Jobify, our mission is clear:
          <ul>
          <li>To empower job seekers by providing them with access to a diverse range of job opportunities, resources, and tools to enhance their job search journey.</li>
          <li>To support employers in finding the best talent by offering them a streamlined and efficient recruitment process, saving them time and resources.</li>
          <li>To foster a sense of community and collaboration within the job market, bringing together individuals and organizations in pursuit of their career and business goals.</li>
          </ul>        
        </p>
      </div>
    </div>
  );
};

export default About;
