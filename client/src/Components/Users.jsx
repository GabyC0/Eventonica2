import React, { useEffect, useState } from 'react';
//import { response } from '../../../server/app';
import DeleteUsers from "./DeleteUsers";


// const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
// const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
// const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };



const Users = () => {

    const [users, setUsers] = useState([]);
    
    console.log('users', users);


    //access api from react app
    const getUsers = () => {
        fetch('http://localhost:4000/users')
            .then((res) => res.json())
            //res is an object with key users
            //keep states as specific as possible
            .then((users) => {
                console.log("res", users);
                setUsers(users);
            });
    };

    const addUser = (newUser) => {
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: { Accept: "application/json", 
            "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        //Why is this not working here??? Uncaught promise...Has to do with async await??
        //.then(res => res.json())
        .then(() => {
            console.log("Added new user");
        })
    };

    useEffect(() => {
        //useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered
        getUsers();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    console.log(name, email);

    //event handler
    //id, name, and email are states that store what values the user types in those fields
    //All of these states can be definied in the component
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {name, email};
        //users is an array of user objects
        addUser(newUser)
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
    };

    //takes in the id to delete
    const deleteUser = (id) => {
        fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            //why is this showing in the path??
            // body: JSON.stringify(id)
        })
        //Why is this not working here??? Uncaught promise...Has to do with async await??
        //.then(res => res.json())
        // .then(() => {
        //     console.log("Deleted user");
        // })
        .then(response => response.json())
            .then(data => {
             console.log('Success:', data);
                // if success, do the following
                const newUsers = users.filter((i) => i.id !== id);
                setUsers(newUsers);
            })
        .catch((error) => {
            console.error('Error:', error);
        });
        //sets newUsers to filter through users id, if the id is not the deleteId then add to the newUsers list
        // const newUsers = users.filter((i) => i.id !== id);
        //     setUsers(newUsers);
    };

    return <section className="user-management">
            <h2>User Management</h2>

            <ul id="users-list"> {users.map((user, index) => <li key={index}> { user.name} {user.email} </li> )} </ul>

            <div>
              <h3>Add User</h3>
              <form id="add-user" action="#" onSubmit={handleSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)} /><br/>

                {/* Add more form fields here */}
                    {/* <label>ID</label>
                    <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)} /><br/> */}
                    <br/>
                    <label>Email</label>
                    <input type="email" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </fieldset>
                
                <input type="submit" value="Add" />
                
              </form>
              
            </div>

            <DeleteUsers deleteUser={deleteUser}/>


          </section>
}

export default Users;
