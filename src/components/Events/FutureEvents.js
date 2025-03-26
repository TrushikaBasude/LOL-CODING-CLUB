import React, { useState } from "react";
import "./Events.css";

import EventVideoCard from "./EventVideoCard";
import EventCard from "./EventCard";
import ComingSoon from "../../images/ComingSoon.png";
// import BlockchainBlitz from "../../images/events/BlockchainBlitz.png";
// import Finology from "../../images/events/FinologyFlyer.png"
import MonthlyCodingContestVideo from "../../images/events/MonthlyCodingContestVideo.mp4";
import UiUxWorkshop from "../../images/events/UIUX Workshop.png"

function UpcomingEvents() {
  const [upcomingEvents] = useState([
    // {
    //   image: ComingSoon,
    //   datetime: "",
    //   title: "",
    //   action: "Coming soon",
    //   registrationform: ""
    // },

    {
      video: MonthlyCodingContestVideo,
      // image: Finology,
      datetime: "14th September 2024",
      title: "Monthly Coding Contest",
      action: "Register Now",
      registrationform: "https://www.linkedin.com/posts/lol-coding-club_exciting-announcement-lol-coding-club-activity-7239921094382567425-G67-?utm_source=share&utm_medium=member_desktop",
    },
    // {
    //     image: UiUxWorkshop,
    //     // image: Finology,
    //     datetime: "23rd September 2024",
    //     title: "UI/UX Workshop",
    //     action: "Register Now",
    //     registrationform: "https://forms.gle/iv5th4hikbkUrhJx9",
    //   },
  ]);

  return (
    <>
      <div id="events" className="events-content">
        <div className="section-heading">
          <h1>Upcoming Events</h1>
        </div>

        <div className="events-type-description">
          <h3 data-aos="zoom-in" data-aos-duration="1000">
            Our upcoming events are packed with opportunities for growth and
            learning! Mark your calendar for the exciting events!
          </h3>
        </div>

        <div className="events-card-container">
          {upcomingEvents.map((event) => (
            <EventVideoCard
              key={event.date}
              video = {event.video}
               image={event.image}
              datetime={event.datetime}
              title={event.title}
              action={event.action}
              link={event.registrationform}
            />
          ))}
        </div>
        {/* <div className="events-card-container">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.date}
              image = {event.image}
              // image={event.image}
              datetime={event.datetime}
              title={event.title}
              action={event.action}
              link={event.registrationform}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default UpcomingEvents;
