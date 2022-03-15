import Users from "./Users";
import React, {useState} from "react";




const Events = () => {

    const event1 = {
        id: "1",
        name: "Birthday",
        date: "2021-02-04",
        description: "A funeral for my 20's",
        category: "Celebration",
      };
      
      const event2 = {
        id: "2",
        name: "Eventonica",
        date: "2021-08-01",
        description: "Work on Eventonica together",
        category: "Education",
      };
      
      const event3 = {
        id: "3",
        name: "JS Study Session",
        date: "2021-10-01",
        description: "A chance to practice Javascript interview questions",
        category: "Education",
      };

    const [events, setEvents] = useState([event1, event2, event3]);

    <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {events.map((event, index) => <li key={index}>{event.name}{event.description} </li>)}
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#">
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                  />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
              </form>
            </div>
          </section>

}

export default Events;


