import React from "react";

import flyer from "../assets/images/programs/ilm_program.jpg"

const alima = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
    <div
        style={{
          background: 'powderblue',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{
            margin: 0,
            color: "gray"
          }}>
            Ilm Program

          </h1>

        </div>
        <a href="/#communityprograms"><tab1><button class="button">Go Back To The Homepage</button></tab1></a>
    </div>
  <br />

  <center><img src={flyer} style={{width: "35vw", height: "100vh"}}></img></center>

  <h4><tab1>Mission</tab1></h4>

  <p>
  Salihah Central has been offering online classes in the traditional
  Islamic Sciences for the past 10 years. The goal of this program is
  to keep women connected to Islamic learning and teaching within the
  context of their day-to-day lives. Our aim is to make learning accessible
  by creating flexible scheduling and accommodating the one-on-one needs of our students.
  </p>
  <br/>
  <p>
  The program’s goal is for students in this cohort stay together through an in-depth,
  academic approach to Islamic knowledge and insha’Allah graduate together with an Ilm Program degree.
  We offer a full range of subjects including Qur’anic Tafseer, Hadith, Fiqh and Arabic.
  </p>
<br />

<h4><tab1></tab1>FAQ's</h4>

      <h4><tab2></tab2>Question: <font color="white">What is the time commitment?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">1-3 hours per course, including study time</font></h4>
      <br/>
      <h4><tab2></tab2>Question: <font color="white">How long does it take to get an Ilm Program degree?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">The Ilm Program degree is completed after 6 years of full-time coursework. Part time tracks are available, as well as the option to audit course for a pass/no pass grade.</font></h4>
      <br/>
      <h4><tab2></tab2>Question: <font color="white">How is the Ilm Program program different than the community classes?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">Students in the Ilm Program program are expected to take exams and show academic level performance, </font></h4>
      <h4><tab2></tab2><font color="lightsteelblue">whereas community classes are designed for general knowledge and benefit, without the academic rigor of exams.</font></h4>
      <h4><tab2></tab2>Question: <font color="white">Do I have to take all the courses within that year?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">No, take as many or as few classes that fit in your schedule.
      If you’d like to space that year over more years, that is up to your schedule and availability.</font></h4>
      <br/>
      <h4><tab2></tab2>Question: <font color="white">What fiqh is taught in the Ilm Program Program?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">Hanafi fiqh, as well as general comparison in usul of the Shafi and Maliki madhab.</font></h4>
      <br/>
      <h4><tab2></tab2>Question: <font color="white">What does a sample schedule look like?</font></h4>
      <br/>
      <h4><tab2></tab2>Answer: <font color="lightsteelblue">Here is a mock schedule that may be helpful:</font></h4>
      <br/>



      <table>
        <tr>
          <td></td>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thur</td>
          <td>Fri</td>
        </tr>

        <tr>
          <td><tab1></tab1>5-6 hours per week</td>
          <td>Qur'anic Tajweed</td>
          <td></td>
          <td>Qur'anic Tajweed</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><tab1></tab1>1-2 hours per week</td>
          <td></td>
          <td>Hadith</td>
          <td></td>
          <td>Hadith</td>
          <td></td>
        </tr>

        <tr>
          <td><tab1></tab1>3 hours per week</td>
          <td>Arabic Grammar and Syntax</td>
          <td></td>
          <td>Arabic Grammar and Syntax</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td><tab1></tab1>1 hour per week</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Fiqh</td>
        </tr>
    </table>
</div>
);

export default alima
