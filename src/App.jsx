import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUsersAnalytics,
  sendNotification,
} from "./services/api";

import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const res = await getUsersAnalytics();
      setAnalytics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchAnalytics();
  }, []);

  const handleSubmit = async (data) => {
    try {
      if (editingUser) {
        await updateUser(editingUser._id, data);
        setEditingUser(null);
      } else {
        await createUser(data);
      }
      await fetchUsers();
      await fetchAnalytics();
    } catch (err) {
      console.error(err);
      alert("Save failed. See console.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this user?")) return;
    try {
      await deleteUser(id);
      await fetchUsers();
      await fetchAnalytics();
    } catch (err) {
      console.error(err);
      alert("Delete failed. See console.");
    }
  };

  const handleNotify = async (userId) => {
    try {
      await sendNotification({ userId, subject: "Hello", message: "Test" });
      alert("Notification sent");
    } catch (err) {
      console.error(err);
      alert("Notification failed");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="app-container">
        <header className="app-header">
          <h1>User Management Dashboard</h1>
          <p>Simple · Clean · Centered</p>
        </header>

        <main className="app-main">
          <section className="card">
            <h2>{editingUser ? "Edit User" : "Add User"}</h2>
            <UserForm
              initialData={editingUser}
              onSubmit={handleSubmit}
              onCancel={() => setEditingUser(null)}
            />
          </section>

          <section>
            <h2 style={{ margin: "8px 0" }}>User List</h2>
            <UserTable
              users={users}
              onEdit={(u) => setEditingUser(u)}
              onDelete={handleDelete}
              onNotify={handleNotify}
            />
          </section>

          <section className="card">
            <h2>Analytics</h2>
            <Analytics data={analytics} />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
