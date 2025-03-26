import "./Feature.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function EventContainer() {
  return (
    <div className="event-container">
      <div className="event-info">
        <h1>UPCOMING EVENT</h1>
        <h2>UI/UX Unleashed</h2>
        {/* <p>Start smart: Grasp the basics of Finance</p> */}
        <p>Dive into the world of Design</p>
        <p>Design Sleek Website and App working Prototypes</p>
        <p>WEDNESDAY, 23th SEPT 2024</p>
        <p>Register to Participate!</p>

        {/* template */}
        {/* <h1>Comming Soon</h1> */}
        {/* <h2>Blockchain Blitz Workshop</h2>
        <p>Hands on Session on Blockchain</p>
        <p>Remote Center Hall, WIT Solapur</p>
        <p>SATURDAY, 24th FEB 2023</p>
        <p>Register to Participate!</p> */}

      </div>
      <a
        className="register-btn"
        href="https://forms.gle/iv5th4hikbkUrhJx9"
        target="_black"
        data-cursor-text="Register Now"
        data-cursor
      >
        Register Now
      </a>
      {/* <a
        className="register-btn"
        href="https://www.linkedin.com/company/lol-coding-club/posts/?feedView=all"
        target="_black"
        data-cursor-text="Stay Tuned"
        data-cursor
      >
        Stay Tuned
      </a> */}
    </div>
  );
}

function ExploreContainer() {
  return (
    <div
      className="explore-container"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h1>EXPLORE</h1>

      <div className="news-letter-hashnode">
        <a
          href="https://lolclubwit.hashnode.dev/newsletter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-newspaper-o"></i>
          Subscribe News Letter
        </a>
      </div>
      <div className="write-blog">
        <a
          href="https://forms.gle/6keszXqp6ZNGgR6QA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-blogger-b"></i>
          Write Blog for LOL
        </a>
      </div>
      <div className="suggestion-box">
        <a
          href="https://forms.gle/QSMzwVr5PrZJcd6t8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-box-tissue"></i>
          LOL Suggestion Box
        </a>
      </div>
      <div className="follow-hashnode">
        <a
          href="https://github.com/Abhay-Shankur/LOL-Coding-Club-App/tree/main/apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fa-brands fa-hashnode"></i> */}
          <i className="fa-brands fa-google-play" />
          Download LOL App
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/company/lol-coding-club/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/lolcodingclub_wit/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://discord.gg/bjSxDHzEte"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-discord"></i>
        </a>
        <a
          href="https://hashnode.com/@lolclubwit"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-hashnode"></i>
        </a>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <section className="feature">
      <EventContainer />
      <ExploreContainer />
    </section>
  );
}

export default Feature;
