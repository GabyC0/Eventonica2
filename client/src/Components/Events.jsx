import Users from "./Users";
import React, {useState, useReducer} from "react";

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


  //func takes two params
    //the current state
    //action passed into dispatch action
        //what happens: whatever we call dispatch with, it's going to get set to action var and reducer will return our new updated state(??)
  const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'editName':
            console.log('Logged if the editName action is being dispatched');
            //return our state with new payload/data
            return { ...state, name: action.payload };
        
        case 'editId':
            return { ...state, id: action.payload };
        
        case 'editDescription':
            return { ...state, description: action.payload };

        case 'editCategory':
            return { ...state, category: action.payload };

        case 'editDate': 
            return { ...state, date: action.payload }

        default:
            return state;
    }
  };


const Events = () => {

        const [events, setEvents] = useState([event1, event2, event3]);

        const initialState = {
            id: '',
            name: '',
            date: '',
            description: '',
            category: ''
        };
        
        //in [] 
            //state is the initial state bc in an obj
            //dispatch is a function that we call in order to update our state -> calls the reducer function, given certain params
        //useReducer takes in two params
            //reducer -> a function that we perform on our state to get new state
            //an object with an initial state
        const [state, dispatch] = useReducer(reducer,  initialState );



        const handleSubmit = (e) => {
            e.preventDefault();
            // const newEvent = {initialState};
            //setEvent -> copying what is already there by using ...events
            //state is the value of initial state

            setEvents([...events, state]);
            console.log([...events, state]);
        }
    //[event1, event2, event3]

    return <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {events.map((event, index) => <li key={index}>{event.date}<br/>{event.name}: {event.description} </li>)}
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#" onSubmit={handleSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                    value={state.name} onChange={(e) => dispatch({ type: 'editName', payload: e.target.value})
                    }
                  />
                </fieldset>
                {/* Add more form fields here */}
                <fieldset>
                    <label>ID</label>
                    <input
                    type="number"
                    id="add-event-id"
                    value={state.id} onChange={(e) => dispatch({ type: 'editId', payload: e.target.value})
                }
                    />
                </fieldset>

                <fieldset>
                    <label>Date</label>
                    <input
                    type="date"
                    id="add-event-date"
                    value={state.date} onChange={(e) => dispatch({ type: 'editDate', payload: e.target.value})
                    
            }
                    />
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <input
                    type="text"
                    id="add-event-description"
                    value={state.description} onChange={(e) => dispatch({ type: 'editDescription', payload: e.target.value})
        }
                    />
                </fieldset>
                <fieldset>
                    <label>Category</label>
                    <input
                    type="text"
                    id="add-event-category"
                    value={state.category} onChange={(e) => dispatch({ type: 'editCategory', payload: e.target.value})
    }
                    />
                </fieldset>

                <input type="submit" />
              </form>
            </div>
          </section>

}

export default Events;


