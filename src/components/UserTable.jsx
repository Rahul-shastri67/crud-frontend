import React from "react";

export default function UserTable({ users = [], onEdit, onDelete, onNotify }) {
  if (!users || users.length === 0) {
    return (
      <div className="card">
        <div style={{ color: "var(--muted)", textAlign: "center", padding: 12 }}>
          No users yet. Add one using the form above.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card" style={{ padding: 12 }}>
        <table className="user-table" aria-label="user-list">
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
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.city || "—"}</td>
                <td>{u.state || "—"}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => onEdit(u)}>Edit</button>
                    <button onClick={() => onDelete(u._id)}>Delete</button>
                    <button onClick={() => onNotify(u._1d || u._id)}>Notify</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-list">
        {users.map((u) => (
          <div className="mobile-card" key={u._id}>
            <div style={{ fontWeight: 700 }}>{u.name}</div>
            <div className="meta">{u.email}</div>
            <div className="meta">{(u.city || "Unknown") + (u.state ? `, ${u.state}` : "")}</div>
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button onClick={() => onEdit(u)}>Edit</button>
              <button onClick={() => onDelete(u._id)}>Delete</button>
              <button onClick={() => onNotify(u._id)}>Notify</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
