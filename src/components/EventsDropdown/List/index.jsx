import React from "react";
import PropTypes from "prop-types";

const List = ({ eventsList }) => {
  const userEvents = [...eventsList];
  return (
    <>
      {eventsList.length === 0 ? (
        <ul className="event-List" key={eventsList.length}>
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
                <div key={`_${id}`} className="event-item">
                  <h4 key={id} className="event_title">
                    {item.title ? item.title : "Default title"}
                  </h4>
                  <p key={`_${id}_`} className="event_place">
                    {item.address ? item.address : "Default address"}
                  </p>
                  <p key={`__${id}`} className="event_time">
                    {item.time ? item.time : "Default time"}
                  </p>
                </div>
              );
            }
            return <></>;
          })}
          {userEvents.length > 2 ? <span>More...</span> : null}
        </ul>
      )}
    </>
  );
};

List.propTypes = {
  events: PropTypes.array
};

List.defaultProps = {
  events: []
};

export default List;
