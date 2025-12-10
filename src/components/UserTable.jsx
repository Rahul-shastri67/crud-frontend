export default function UserTable({ users, onEdit, onDelete, onNotify }) {
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
