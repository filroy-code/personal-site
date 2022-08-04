import React from "react";
import emailIcon from "../resources/email.png";
import { Button, TextField } from "@mui/material";

const Contact = React.forwardRef((props, ref) => {
  const buttonStyle = {
    backgroundColor: "rgb(236, 76, 76)",
    color: "white",
    border: "1px solid rgb(236, 76, 76)",
    margin: "15px",
  };

  function submitHandler(event) {
    console.log("submitted");
  }

  return (
    <div ref={ref} id="contact">
      <div className="sectionHeading">Contact</div>
      <div className="contactParagraph">
        Want to collaberate? Questions about my journey? Have an opportunity
        you'd like to discuss? Complete the form below and I'll get back to you
        as soon as I can.
      </div>
      <div className="contactBox">
        <form
          action="https://formsubmit.co/3ab0e62a763c66f810f1a433fc5e9187"
          method="POST"
          onSubmit={submitHandler}
        >
          <TextField
            name="name"
            multiline
            fullWidth
            style={{ backgroundColor: "white" }}
            placeholder="Name"
          ></TextField>
          <br></br>
          <TextField
            name="email"
            multiline
            fullWidth
            style={{ backgroundColor: "white" }}
            placeholder="Email"
          ></TextField>
          <br></br>
          <TextField
            name="message"
            multiline
            minRows={8}
            fullWidth
            style={{ backgroundColor: "white" }}
            placeholder="Message"
          ></TextField>
          <br></br>
          <Button type="submit" style={buttonStyle} variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
