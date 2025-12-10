import { useEffect, useState } from 'react';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUsersAnalytics,
  sendNotification,
} from './services/api';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import Analytics from './components/Analytics';
import Footer from './components/footer';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    const res = await getUsersAnalytics();
    setAnalytics(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchAnalytics();
  }, []);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      if (editingUser) {
        await updateUser(editingUser._id, data);
        setMessage('User updated successfully');
        setEditingUser(null);
      } else {
        await createUser(data);
        setMessage('User created successfully');
      }
      fetchUsers();
      fetchAnalytics();
    } catch (err) {
      setMessage('Something went wrong');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setLoading(true);
    try {
      await deleteUser(id);
      setMessage('User deleted');
      fetchUsers();
      fetchAnalytics();
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const handleNotify = async (userId) => {
  setLoading(true);
  try {
    await sendNotification({
      userId,
      subject: "Notification from CRUD App",
      message: "Hi, this is a test notification.",
    });
    setMessage("Notification sent successfully");
  } catch (err) {
    console.error(
      "Notify error >>>",
      err?.response?.data || err.message || err
    );
    alert(
      JSON.stringify(err?.response?.data || { error: err.message }, null, 2)
    );
    setMessage("Failed to send notification");
  } finally {
    setLoading(false);
    setTimeout(() => setMessage(""), 2000);
  }
};


  return (
    <div className="app-root">
      <div className="app-container">
        <header className="app-header">
          <div className="header-inner">
            <div className="dev-logo">
              <span>&lt;/&gt;</span>
            </div>
            <div>
              <h1>User Management Dashboard</h1>
              <p>React · Node · Mongo · CRUD · Analytics · Email Notifications</p>
            </div>
          </div>
        </header>

        {message && <div className="toast">{message}</div>}
        {loading && <div className="loading">Processing...</div>}

        <main className="app-main">
          <section className="card card-left">
            <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
            <UserForm
              initialData={editingUser}
              onSubmit={handleSubmit}
              onCancel={() => setEditingUser(null)}
            />
          </section>

          <section className="card card-right">
            <h2>User List</h2>
            <UserTable
              users={users}
              onEdit={setEditingUser}
              onDelete={handleDelete}
              onNotify={handleNotify}
            />
          </section>
        </main>

        <section className="card analytics-card">
          <h2>Analytics Overview</h2>
          <Analytics data={analytics} />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
