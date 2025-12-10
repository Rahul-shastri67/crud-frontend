export default function UserTable({ users, onEdit, onDelete, onNotify }) {
 if (!users || users.length === 0) {
    return <p className="muted">No users found. Add a user to get started.</p>;
  }
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td className="actions">
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user._id)}>Delete</button>
              <button onClick={() => onNotify(user._id)}>Notify</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
