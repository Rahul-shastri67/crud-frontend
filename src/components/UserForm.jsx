import { useEffect, useState } from 'react';

export default function UserForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || '',
        email: initialData.email || '',
        city: initialData.city || '',
        state: initialData.state || '',
      });
    } else {
      setForm({ name: '', email: '', city: '', state: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button type="submit">
          {initialData ? 'Update' : 'Add'}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
