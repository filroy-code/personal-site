import React from "react";
import emailIcon from "../resources/email.png";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="contact">
      <div className="sectionHeading">Contact</div>
      <div className="contactParagraph">
        Want to collaberate? Questions about my journey? Have an opportunity
        you'd like to discuss? Contact me at the email below.
      </div>
      <div className="contactBox">
        <img className="emailIcon" src={emailIcon} alt="Email Address"></img>
        <div>filip_andrejuk@hotmail.com</div>
      </div>
    </div>
  );
});

export default Contact;
