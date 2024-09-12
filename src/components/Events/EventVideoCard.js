function EventCard(props) {
  return (
    <>
      <div className="card" data-aos="slide-up" data-aos-duration="1500">
        <video loop autoPlay muted width="100%" controls >
          <source src={props.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <p>{props.datetime}</p>
          <h4>{props.title}</h4>
          <button className="action-btn">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.action}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
