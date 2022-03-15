import React, { useState } from 'react';


const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };



const Users = () => {

    const [users,setUsers] = useState([marlin, nemo, dory]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    console.log(name, email);

    //event handler
    //id, name, and email are states that store what values the user types in those fields
    //All of these states can be definied in the component
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id, name, email };
        //users is an array of user objects
        setUsers([...users, newUser]);
    };

    return <section className="user-management">
            <h2>User Management</h2>

            <ul id="users-list">
              {/* display all existing Users here */}
              <li>...</li>
            </ul>

            <div>
              <h3>Add User</h3>
              <form id="add-user" action="#" onSubmit={handleSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)} /><br/>

                {/* Add more form fields here */}
                    <label>ID</label>
                    <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)} /><br/>

                    <label>Email</label>
                    <input type="email" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </fieldset>
                
                <input type="submit" value="Add" />
                
              </form>
            </div>


          </section>
}

export default Users;
