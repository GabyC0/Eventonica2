const DeleteUsers = () => {
    const [deleteId, setDeleteId] = useState("");

    const deleteUser = (deleteId) => {
        const newUsers = users.filter((i) => {
            setUsers(newUsers);
        })
    }

    return (
        <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#">
          <fieldset>
            <label>User ID</label>
            <input type="text" id="delete-user-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    )
};

export default DeleteUsers;