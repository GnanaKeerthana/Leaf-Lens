import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <section className="steps">
        <h2 className="steps-title">How to Use</h2>
        <ol className="steps-list">
          <li>Step 1: Go to "CHECK" to upload</li>
          <li>Step 2: Take a picture of the leaf you want to test (potato, tomato, pepper leaf).</li>
          <li>Step 3: Upload your picture to analyze the leaf condition.</li>
          <li>Step 4: Get your result and take action.</li>
          <li>Step 5: If your image gets mismatched, then kindly re-upload the appropriate image and try again.</li>
        </ol>

        {/* Button to Redirect to the Check Page */}
        <button className="check-button" onClick={() => navigate("/check")}>
          Go to Check
        </button>
      </section>

      <style>{`
        /* General Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        /* Landing Page */
        .landing-page {
          position: relative;
          width: 100%;
          height: 100vh; /* Full viewport height */
          background-image: url(${img}); /* Set the background image here */
          background-size: cover; /* Ensure the image covers the whole background */
          background-attachment: fixed; /* Make the background image fixed during scroll */
          display: flex;
          flex-direction: column;
          justify-content: center; /* Center the content vertically */
          align-items: center; /* Center the content horizontally */
          padding: 20px; /* Padding for small screens */
        }

        /* Steps Section */
        .steps {
          background-color: rgba(255, 255, 255, 0.8); /* Slight transparency added to the white background */
          padding: 40px; /* Add padding for better spacing */
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 800px; /* Limit the width of the steps section */
          width: 100%; /* Ensure it doesn't overflow the screen */
          margin: 0 auto;
        }

        .steps-title {
          font-size: 3rem; /* Increased size for better visibility */
          color: black;
          margin-bottom: 20px;
        }

        .steps-list {
          list-style-type: none; /* Remove the numbers from the list */
          padding-left: 0; /* Remove left padding */
          color: black;
        }

        .steps-list li {
          font-size: 1.3rem;
          margin-bottom: 15px;
        }

        /* Check Button */
        .check-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1.2rem;
          color: white;
          background-color: #28a745; /* Green color */
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }

        .check-button:hover {
          background-color: #218838; /* Darker green */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .steps-title {
            font-size: 2rem; /* Adjust the title font size on smaller screens */
          }

          .steps-list li {
            font-size: 1.1rem; /* Adjust the list font size for smaller screens */
          }

          .landing-page {
            padding: 15px; /* Adjust padding for mobile devices */
          }

          .steps {
            padding: 20px; /* Reduce padding for mobile */
            margin-top: 20px; /* Add some space between the content and the header */
          }

          .check-button {
            font-size: 1rem;
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .steps-title {
            font-size: 1.8rem; /* Further reduce the font size for very small screens */
          }

          .steps-list li {
            font-size: 1rem; /* Smaller text size for small devices */
          }

          .check-button {
            font-size: 0.9rem;
            padding: 6px 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
