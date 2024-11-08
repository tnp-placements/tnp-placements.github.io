import React from 'react';
import Heading2 from '../Heading2';

const Contact = () => {
  return (
    <div id='contact' className=" py-10 flex flex-col justify-center items-center gap-8 bg-[#F9FBFD]">
      <div>
        <Heading2 text="Contact" />
      </div>
      
        <p className="text-gray-700 mb-6 ">
          Those interested in the campus recruitment may also contact:
        </p>
      <div className="flex gap-12 max-w-4xl ">

        
            
          <div className="space-y-3 ">
            <h3 className="text-xl font-bold text-gray-900">Dr. M.P.S. Bhatia</h3>
            <p className="text-gray-700">
              Training & Placement<br />
              Netaji Subhas University of Technology<br />
              (Formerly, Netaji Subhas Institute of Technology)<br />
              Sector-3, Dwaraka, New Delhi-110078, INDIA
            </p>
            <div className="space-y-1 text-gray-700">
              <p>Phone: +91-9968604104, +91-9818192294</p>
              <p>Email: 
                <a href="mailto:placements@nsut.ac.in" className="text-blue-600 hover:underline ml-1">placements@nsut.ac.in</a>,
                <a href="mailto:placements@nsitonline.in" className="text-blue-600 hover:underline ml-1">placements@nsitonline.in</a>
              </p>
              {/* <p>Tel: +91-11-25099021 (Direct), 25099037-42 Ext-2209, 2211</p>
              <p>Fax: +91-11-25099022</p> */}
            </div>
          </div>


          <div className="space-y-3 ">
            <h3 className="text-xl font-bold text-gray-900">Rajesh Rawat</h3>
            <p className="text-gray-700">
              Room No. 213, Admin Block 2nd Floor<br />
              Training and Placement<br />
              Netaji Subhas University of Technology<br />
              Sector-3 Dwarka, New Delhi-110078
            </p>
            <div className="space-y-1 text-gray-700">
              <p>Mobile: +91-9205475078, +91-9810472670</p>
              <p>Email: 
                <a href="mailto:placements@nsut.ac.in" className="text-blue-600 hover:underline ml-1">placements@nsut.ac.in</a>,
                <a href="mailto:placements@nsitonline.in" className="text-blue-600 hover:underline ml-1">placements@nsitonline.in</a>
              </p>
              {/* <p>Tel: +91-11-25099021</p> */}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
