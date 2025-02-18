import React from "react";
import "./Contact.css"

function Contact() {
    return ( 
        <>
        <h1 id="heading2">Contact Us</h1>
        <div className="detail">
        <form>
            <label htmlFor="in1">Username </label> 
            <input type="text " placeholder="enter your name" name="input" id="in1"></input>
            <br/>
            <br/>
          <label htmlFor="in2">Email_Id </label>
            <input type="text" placeholder="enter your email" name="email" id="in2"></input>
            <br/>
            <br/>
            <label htmlFor="in3">Phone Number </label>
            <input type="number" placeholder="enter your number" name="number" id="in3"></input>
            <br/>
            <br/>
         
          <label htmlFor="in4" >Message </label> 
            <textarea id="in4" placeholder="Enter your message"></textarea>
            <br/>
          
            <br/>
            <button id="btn3" onClick={()=>alert("thank you for contacting !please contact on this mobile number 6386371734")}>Send Message</button>
        </form>
        </div>
        </>
     );
}

export default Contact;