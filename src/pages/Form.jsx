import React from "react";
import { Link } from 'react-router-dom';


const Contact = () => {
  const showAlert = () => {
    alert("Submitted!");
  };

  return (
    <div className="pt-[20px]">
      <div className="contact grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[6%] gap-4">
        <div className="info text-center  ">
          <br />
          <h3 className="text-2xl font-bold">CONTACT US</h3>
          <br />

          <p>
            We love getting emails from readers. Please feel free to write to
            Joanna at
            <a href="mailto:hello@cupofjo.com" className="text-red-500">
              hello@cupofjo.com.
            </a>
            If you have a question, you can also take a look at our
            {/* <Link to="/faq" className='text-red-500'>FAQ</Link> */} <a href="/faq" className="text-red-500">FAQ</a> page — the answer may be waiting there for you.
          </p>
          <br />
          <br />
          <h3 className="text-2xl font-bold">ADVERTISING & PARTNERSHIP</h3>
          <br />
          <p>
            We love working with brands and businesses and are happy to create
            partnerships of all shapes and sizes. Please email{" "}
            <a href="mailto:maureen@cupofjo.com" className="text-red-500">
              maureen@cupofjo.com
            </a>{" "}
            for our media kit.
          </p>
          <br />
          <br />
          <h3 className="text-2xl font-bold">LET'S HANG OUT</h3>
          <br />
          <p>
            You can follow Cup of Jo on{" "}
            <a href="" className="text-red-500">
              Twitter
            </a>
            ,
            <a href="" className="text-red-500">
              Pinterest
            </a>
            ,
            <a href="" className="text-red-500">
              Facebook
            </a>{" "}
            and
            <a href="" className="text-red-500">
              Instagram
            </a>
            . We also send out a weekly email newsletter called{" "}
            <a className="text-red-500" href="">
              Big Salad
            </a>
            , and{" "}
            <a href="" className="text-red-500">
              you can subscribe here
            </a>
            , if you’d like. Thank you!
          </p>
          <br />
        </div>

        <div className=" ">
          
          <form className=" form flex flex-col items-center  p-4 mr-3 rounded">
          <h3 className="text-2xl font-bold text-center">CONTACT FORM</h3>
            <fieldset className="w-full">
              <label>Your name:</label>
              <input type="text" />
              <br />
              <input
                type="text"
                placeholder="enter name"
                className="input input-bordered w-full"
              />
              <div className="">
                <br />
                <label htmlFor="">Your Email:</label>
                <input
                  type="email"
                  placeholder="enter email"
                  className="input input-bordered w-full"
                />
                <br />
                <br />
                <label htmlFor="">Your Phone:</label>
                <input
                  type="number"
                  placeholder="enter your phone number"
                  className="input input-bordered w-full"
                />
                <br />
                <br />
                <label htmlFor="">Your Address:</label>
                <input
                  type="location"
                  placeholder="enter your address"
                  className="input input-bordered w-full"
                />
                <br />
                <br />
                <label htmlFor="">Date & Time:</label>
                <input
                  type="datetime-local"
                  placeholder="enter your address"
                  className="input input-bordered w-full"
                />
                <br />

                <button
                  onClick={showAlert}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded my-2"
                >
                  Submit
                </button>

                <input type="text" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          className="w-full h-full px-[20%] pt-[5%] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7268.878679928842!2d88.59383195715287!3d24.366015406889545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb0409beb51%3A0xf1f4a242c7eed04a!2sRAM%20IT!5e0!3m2!1sen!2sbd!4v1745732828438!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    
      </div>



    

    </div>
  );
};

export default Contact;



