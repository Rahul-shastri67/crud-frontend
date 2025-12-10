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
import Footer from './components/Footer';  // ⭐ Footer import added

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
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
    if (editingUser) {
      await updateUser(editingUser._id, data);
      setEditingUser(null);
    } else {
      await createUser(data);
    }
    fetchUsers();
    fetchAnalytics();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
    fetchAnalytics();
  };

  const handleNotify = async (userId) => {
    await sendNotification({
      userId,
      subject: 'Hello from CRUD App',
      message: 'This is a test notification.',
    });
    alert('Notification sent');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Management Dashboard</h1>
        <p>CRUD + Analytics + Notifications</p>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
          <UserForm
            initialData={editingUser}
            onSubmit={handleSubmit}
            onCancel={() => setEditingUser(null)}
          />
        </section>

        <section className="card">
          <h2>User List</h2>
          <UserTable
            users={users}
            onEdit={setEditingUser}
            onDelete={handleDelete}
            onNotify={handleNotify}
          />
        </section>

        <section className="card">
          <h2>Analytics</h2>
          <Analytics data={analytics} />
        </section>
      </main>

      <Footer />  {/* ⭐ Footer added here */}

    </div>
  );
}

export default App;
