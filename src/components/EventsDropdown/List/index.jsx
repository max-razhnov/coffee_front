import React from "react";
import PropTypes from "prop-types";

const List = ({ events }) => {
  const userEvents = [...events];
  userEvents.sort((a, b) => a.date - b.date);
  return (
    <>
      {events.length === 0 ? (
        <ul className="event-List" key={events.length}>
          <div className="event-item">
            <h4 className="event_title">No confirmed events</h4>
            <p className="event_place">Check your telegram account</p>
          </div>
        </ul>
      ) : (
        <ul className="event-List">
          {userEvents.map((item, id) => {
            if (id < 3) {
              return (
                <div className="event-item" key={id}>
                  <h4 className="event_title">
                    {item.topic.title
                      ? "Default title"
                      : item.topic.title}
                  </h4>
                  <p className="event_place">
                    item.topic.address ? "Default address" : item.topic.address}
                  </p>
                  <p className="event_time">
                    {item.date
                      ? "Default date"
                      : `${item.date} - ${item.date}`}
                  </p>
                </div>
              );
            }
            return <></>;
          })}
        </ul>
      )}
    </>
  );
};

List.propTypes = {
  events: PropTypes.array,
};

List.defaultProps = {
  events: [],
};

export default List;
