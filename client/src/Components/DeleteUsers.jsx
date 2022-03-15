import React, {useState} from "react";
//import Users from "./Components/Users"

const DeleteUsers = (props) => {
    const [deleteId, setDeleteId] = useState('');



    return (
        <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#" onSubmit={(e) => {e.preventDefault(); props.deleteUser(deleteId); setDeleteId("");}}>
          <fieldset>
            <label>User ID</label>
            <input type="text" id="delete-user-id" value={deleteId} onChange={(e) => setDeleteId(e.target.value)}/>
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    )
};

export default DeleteUsers;