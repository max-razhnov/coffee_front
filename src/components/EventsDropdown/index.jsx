import React from "react";
import PropTypes from "prop-types";
// import List from "./List";
// import { ReactComponent as ArrowIcon } from "../../icons/Arrow.svg";

/**
 * Dropdown component for showing user events
 * @param events (array of label-value objects)
 * example:
 * [{name: "name1", place: "place1", time:"1st September"},
 * {name: "name2", place: "place2", time:"1st September"}]
 */
const EventsDropdown = ({ events }) => (
  // const [isOpened, setIsOpened] = useState(false);

  <div className="event-list_container">
    <button className="event-header">
      <span>
My upcoming events (
        {events.length}
)
      </span>
    </button>
  </div>
);
EventsDropdown.defaultProps = {
  events: [],
};

EventsDropdown.propTypes = {
  events: PropTypes.array,
};

export default EventsDropdown;
