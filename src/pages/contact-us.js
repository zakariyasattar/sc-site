import React from 'react'

const Contact = () => (
<div>
<link rel="stylesheet" type="text/css" href="main.css"/>
  <a><tab1><button>Go back To The Homepage</button></tab1></a>
  <form name="contact" method="POST" netlify>
  <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
  
  
</div>
)

export default Contact
