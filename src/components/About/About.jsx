import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__info">
        <h2>Hello</h2>
        <div className="note">
          <hr />
          <br />
          <p>
            My name is Sirojiddin Najimov (just call me Serge). I am a young
            professional who dreams about working as a front-end developer.
          </p>
          <br />
          <p>
            I am self-driven and hard-working, constantly looking for an
            opportunity to optimise day-to-day tasks.
          </p>
        </div>
        <div className="note">
          <hr />
          <br />
          <p>
            I love working with React. Some might ask, why would I use React to
            create a portfilio? I love my websites, like I love my hamburgers -
            THICK!
          </p>
        </div>
      </div>
      <div className="about__associate">
        <h2>Associate</h2>
        <div className="note">
          <hr />
          <br />
          <a href="https://github.com/intromisan">GitHub</a>
          <a href="https://www.linkedin.com/in/snajimov/">LinkedIn</a>
          <a href="https://www.codewars.com/users/intromisan">CodeWars</a>
        </div>
      </div>
      <div className="about__contacts">
        <h2>Contact me</h2>
        <div className="note">
          <hr />
          <br />
          <a href="mailto:najimovserge@gmail.com">najimovserge@gmail.com</a>
          <a href="tel:+36306769876">+36 30 676 98 76</a>
          <br />
          <p>
            You are very welcome to write me if you have any questions, or maybe
            just to say hello. I love getting emails.
          </p>
        </div>
        <div className="about__image"></div>
      </div>
    </div>
  );
};

export default About;
